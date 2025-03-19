import {
        getTokenAndUserID
} from '../../utils/server';
import {
        initSDK,
        authCheck,
        startPush,
        setPlayUrl,
        destroySDK
} from '../../utils/common';
import {
        wxp
} from '../../app';
const md5 = require('../../utils/md5.js');
const app = getApp();
let {
        zegoAppID,
        server
} = app.globalData;

let zg;

Page({
        data: {
                roomID: '', // 房间ID
                token: '', // 服务端校验token
                pushStreamID: 'xcx-streamID-' + new Date().getTime(), // 推流ID
                livePusherUrl: '', // 推流地址
                livePusher: null, // live-pusher 的 Context，内部只有一个对象
                userID: '', // 用户ID,
                livePlayerList: [],
                connectType: -1, // -1为初始状态，1为连接，0断开连接
                canShow: -1,
                role: '',
                roomUserList: [],
                handupStop: false,
                cdnURL: 'rtmp://wsdemo.zego.im/livestream/',
                pullCdnURL: "",
                pullCdnURLID: "",
                pullIDInput: "",
                isPullByCdnUrl: false,
                isPullByID: false,
                isRelogin: false
        },
        bindKeyInput(e) {
                this.setData({
                        roomID: e.detail.value
                });
        },
        bindCdnURLInput(e) {
                this.setData({
                        cdnURL: e.detail.value
                });
        },
        bindPullCdnURLInput(e) {
                this.setData({
                        pullCdnURL: e.detail.value
                });
        },
        pullByCdnUrl() {
                if (this.data.pullCdnURL) {
                        const id = "xcx-" + Date.now();
                        let isPullByCdnUrl = this.data.isPullByCdnUrl
                        let list = this.data.livePlayerList
                        if (!this.data.isPullByCdnUrl) {
                                let streamInfo = {
                                        streamID: id, // 这个ID 主要用于组件ID
                                        url: this.data.pullCdnURL,
                                        playerContext: wx.createLivePlayerContext(id),
                                }
                                console.error(streamInfo)
                                list.push(streamInfo);

                        } else {
                                const index = list.findIndex(item => item.url == this.data.pullCdnURL);
                                if (index !== -1) {
                                        list[index].playerContext.stop();
                                        list.splice(index, 1);
                                }
                        }

                        isPullByCdnUrl = !isPullByCdnUrl;
                        app.globalData.livePlayerList = list
                        this.setData({
                                livePlayerList: list,
                                isPullByCdnUrl: isPullByCdnUrl,
                                pullCdnURLID: id
                        })
                }
        },
        bindPullIDInput(e) {
                this.setData({
                        pullIDInput: e.detail.value
                });
        },
        async pullByID() {
                if (this.data.pullIDInput) {
                        if (!this.data.isPullByID) {
                                try {
                                        let {
                                                streamID,
                                                url
                                        } = await zg.startPlayingStream(
                                                this.data.pullIDInput, {
                                                sourceType: this.data.playSource || "BGP"
                                        }
                                        );
                                        console.warn(`startPull 拉流地址${url}，拉流类型：${this.data.playSource || "BGP"}`);
                                        setPlayUrl(streamID, url, this);
                                        this.setData({
                                                isPullByID: true,
                                        })
                                } catch (error) {
                                        console.error(error)

                                }

                        } else {
                                zg.stopPlayingStream(this.data.pullIDInput)
                                let list = this.data.livePlayerList
                                for (let j = 0; j < list.length; j++) {
                                        if (list[j]["streamID"] === this.data.pullIDInput) {
                                                list.splice(j, 1)
                                                break
                                        }
                                }
                                app.globalData.livePlayerList = list
                                this.setData({
                                        livePlayerList: list,
                                        isPullByID: false,
                                })
                        }
                }
        },
        stopPullByID() {

        },
        async openRoom(e) {
                if (!this.data.roomID) {
                        wxp.showModal({
                                title: '提示',
                                content: '请输入房间号',
                                showCancel: false,
                        });
                        return;
                }
                if (e.target.dataset && e.target.dataset.role == 2) {
                        this.setData({
                                playSource: 'CDN'
                        })
                }
                if (this.data.connectType !== 1) {
                        try {
                                /** 获取token, userID */
                                this.setToken()
                                /** 开始登录房间 */
                                let isLogin = await zg.loginRoom(this.data.roomID, this.data.token, {
                                        userID: this.data.userID,
                                        userName: 'nick' + this.data.userID
                                }, {
                                        userUpdate: true
                                });
                                isLogin ? console.log('login success') : console.error('login fail');
                                this.setData({
                                        connectType: 1,
                                        isRelogin: true,
                                });
                                // zg.setCustomSignalUrl([`rtmp://120.77.40.218/zegostg/${this.data.pushStreamID}`]); //wss://webrtctest.zego.im/ws?a=webrtc-demo
                        } catch (error) {
                                console.error('error: ', error);
                                return;
                        }
                }
                // 创建房间，开始推流
                if (e.target.dataset && e.target.dataset.role == 1 && this.data.livePusherUrl === '') {
                        startPush(this);
                }

                console.log('role', e.target.dataset.role)
                this.setData({
                        role: e.target.dataset.role == 1 ? 'anchor' : 'audience'
                })
                console.log('role', this.data.role)
        },
        async logout() {
                try {
                        if (this.data.livePusherUrl) {
                                zg.stopPublishingStream(this.data.pushStreamID);
                                this.data.livePusher.stop();
                                this.setData({
                                        livePusherUrl: ''
                                });
                        }
                        if (this.data.livePlayerList.length > 0) {
                                this.data.livePlayerList.forEach(async (item) => {
                                        zg.stopPlayingStream(item.streamID);
                                });
                                this.setData({
                                        livePlayerList: []
                                });
                        }
                        /** 登出房间 */
                        if (zg && this.data.connectType === 1) await zg.logoutRoom(this.data.roomID);
                } catch (error) {
                        console.error('error: ', error);
                }

        },
        async addCdnPublish() {
                const result = await zg.addPublishCdnUrl(
                        this.data.pushStreamID,
                        this.data.cdnURL + this.data.pushStreamID
                        //The calculation of the signature is recommended to be placed in the background server
                        // md5(zegoAppID + Math.ceil(new Date().getTime() / 1000).toString() + this.data.cdnURL),
                        // 'rtmp://wsdemo.zego.im/livestream/'+this.data.pushStreamID,
                );
                if (result.errorCode == 0) {
                        console.warn('add push target success');

                } else {
                        console.warn('add push target fail ' + result.errorCode);
                }

        },
        async removeCdnPublish() {
                const result = await zg.removePublishCdnUrl(
                        this.data.pushStreamID,
                        this.data.cdnURL + this.data.pushStreamID
                        //The calculation of the signature is recommended to be placed in the background server
                        // 'rtmp://wsdemo.zego.im/livestream/'+this.data.pushStreamID,
                );
                console.warn('result', result);
                if (result.errorCode == 0) {
                        console.warn('remove push target success');
                } else {
                        console.warn('remove push target fail ' + result.errorCode);
                }

        },
        async publishCdn() {
                startPush(this, {
                        sourceType: 'CDN'
                });
        },
        // live-pusher 绑定推流事件，透传推流事件给 SDK
        onPushStateChange(e) {
                console.warn('onPushStateChange', e.detail.code, e.detail.message);
                if (e.detail.code === 5000) {
                        this.setData({
                                handupStop: true
                        })
                        // this.data.livePusher && (this.data.livePusher! as wx.LivePusherContext).stop();
                }
                zg.updatePlayerState(this.data.pushStreamID, e);
        },
        // live-pusher 绑定网络状态事件，透传网络状态事件给 SDK
        onPushNetStateChange(e) {
                zg.updatePlayerNetStatus(this.data.pushStreamID, e);
        },
        // live-player 绑定网络状态事件，透传网络状态事件给 SDK
        onPlayNetStateChange(e) {
                const id = e.currentTarget.id
                if(this.data.pullCdnURLID !== id) {
                        zg.updatePlayerNetStatus(e.currentTarget.id, e);
                }
        },
        //live-player 绑定拉流事件，透传拉流事件给 SDK
        onPlayStateChange(e) {
                console.warn('onPlayStateChange', e.detail.code, e.detail.message)
                const id = e.currentTarget.id
                if(this.data.pullCdnURLID !== id) {
                        zg.updatePlayerState(e.currentTarget.id, e);
                } else if(e.detail.code == 2007){
                        const index = this.data.livePlayerList.findIndex(item => item.url == this.data.pullCdnURL);
                        if (index !== -1) {
                                const streamInfo = this.data.livePlayerList[index];
                                streamInfo.playerContext.stop();
                                streamInfo.playerContext.play();    
                        }
                }
        },
        async onReady() {
                console.log('onReady')
                zg = initSDK(this);
        },
        async reLogin() {
                try {
                        // await zg.logoutRoom(this.data.roomID);
                        // this.setData({
                        //         userID: 'xcx-userID-' + new Date ().getTime ()
                        // });
                        // this.data.livePusher && (this.data.livePusher! as wx.LivePusherContext).stop();
                        /** 获取token, userID */
                        const res = getTokenAndUserID();
                        if (!res) {
                                console.error("userID and Token haven't been set.")
                                return;
                        }
                        this.setData({
                                token: res.token,
                                userID: res.userID
                        });
                        console.error('login ', this.data.userID, this.data.token, this.data.roomID, zegoAppID);
                        let isLogin = await zg.loginRoom(this.data.roomID, this.data.token, {
                                userID: this.data.userID,
                                userName: 'nick' + this.data.userID
                        });
                        isLogin ? console.log('login success') : console.error('login fail');
                        this.setData({
                                connectType: 1,
                                isRelogin: true
                        });
                        console.log('pushStream: ', this.data.pushStreamID, this.data.livePusherUrl, this.data.role);
                        if (this.data.role === 'anchor') {
                                const {
                                        url
                                } = await zg.startPublishingStream(this.data.pushStreamID);
                                console.log('url', this.data.livePusherUrl, url);
                                let streamInfo = {}
                                streamInfo["streamID"] = this.data.pushStreamID;
                                streamInfo["url"] = "rtmp://rtmp.wsdemo.zego.im/livestream/" + this.data.pushStreamID;
                                streamInfo["playerContext"] = wx.createLivePlayerContext(streamID);
                                this.data.livePlayerList.push(streamInfo);
                                if (this.data.livePusherUrl !== url) {
                                        this.setData({
                                                livePusherUrl: url,
                                                livePlayerList: livePlayerList
                                        }, () => {
                                                // (this.data.livePusher! as wx.LivePusherContext).stop();
                                                this.data.livePusher.start();
                                        });
                                }
                        }
                } catch (error) {
                        console.error('error: ', error);
                }
        },
        onShow() {
                console.log('onShow: ', this.data.handupStop, this.data.connectType, server);
                authCheck(this);
                // if (zg && (this.data.handupStop || this.data.connectType === 0)) {
                //         this.reLogin();
                // }
                if (zg && this.data.roomID) {
                        this.reLogin();
                }
                // 刷新全局变量
                zegoAppID = getApp().globalData.zegoAppID;
                server = getApp().globalData.server;
                this.setData({
                  pullCdnURL: "rtmp://rtmp.wsdemo.zego.im/livestream/" + this.data.pushStreamID
                })
                this.setToken()
        },
        onHide() {
                // this.logout();
        },
        onUnload() {
                this.logout();
                destroySDK();
                wx.offNetworkStatusChange()
        },
        onLoad() {
                // 监听网络状态
                this.onNetworkStatus();
        },
        onNetworkStatus() {
                wx.onNetworkStatusChange(res => {
                        console.log('net', res);
                        if (res.isConnected && this.data.connectType === 0 && zg) {
                                console.warn('connectType', this.data.connectType);
                                // this.reLogin();
                        }
                })
        },
        changeToken() {
                this.setData({
                        token: e.detail.value
                });
        },
        //更新鉴权token
        renewToken() {
                zg.renewToken(this.data.token);
        },
        setToken() {
                const res = getTokenAndUserID();
                if (!res) {
                        console.error("userID and Token haven't been set.")
                        return;
                }
                this.setData({
                        token: res.token,
                        userID: res.userID
                });
        }
});