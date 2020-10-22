import {
        getLoginToken
} from '../../utils/server';
import {
        initSDK,
        authCheck,
        startPush
} from '../../utils/common';
import {
        wxp
} from '../../app';

let {
        zegoAppID,
        server
} = getApp().globalData;
let zg;
Page({
        data: {
                roomID: '', // 房间ID
                token: '', // 服务端校验token
                pushStreamID: 'xcx-streamID-' + new Date().getTime(), // 推流ID
                livePusherUrl: '', // 推流地址
                livePusher: null, // live-pusher 的 Context，内部只有一个对象
                userID: 'xcx-userID-' + new Date().getTime(), // 用户ID,
                livePlayerList: [],
                connectType: -1, // -1为初始状态，1为连接，0断开连接
                canShow: -1,
                roomUserList: [],
                handupStop: false,
                bgmStart: false,
                bgmPaused: false
        },
        bindKeyInput(e) {
                this.setData({
                        roomID: e.detail.value
                });
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
                if (this.data.connectType !== 1) {
                        try {
                                let token = await getLoginToken(zegoAppID, this.data.userID);
                                this.setData({
                                        token
                                });
                                let isLogin = await zg.loginRoom(this.data.roomID, this.data.token, {
                                        userID: this.data.userID,
                                        userName: 'nick' + this.data.userID
                                });
                                isLogin ? console.log('login success') : console.error('login fail');
                                this.setData({
                                        connectType: 1
                                });
                        } catch (error) {
                                console.error('error: ', error);
                                return;
                        }
                }
                // 创建房间，开始推流
                if (e.target.dataset && e.target.dataset.role == 1 && this.data.livePusherUrl === '') {
                        startPush(this);
                }
                this.setData ({
                        role: e.target.dataset.role 
                })

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
                        // 退出登录
                        if (zg && this.data.connectType === 1) await zg.logoutRoom(this.data.roomID);
                } catch (error) {
                        console.error('error: ', error);
                }

        },
        playOrStopBgm() {
                if (!this.data.livePusher.playBGM) {
                        wxp.showModal({
                                title: '提示',
                                content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后再试。',
                                showCancel: false,
                        });
                        return;
                }
                this.setData({
                        bgmStart: !this.data.bgmStart
                }, () => {
                        if (this.data.bgmStart) {
                                this.bgmStartEvent()
                        } else {
                                this.data.livePusher && this.data.livePusher.stopBGM();
                        }
                });
        },
        bgmStartEvent() {
                this.data.livePusher && this.data.livePusher.playBGM({
                        url: 'https://zego-sdkdemospace.oss-cn-shanghai.aliyuncs.com/demo/bgm.mp3',
                        success: function (res) {
                                console.log('suc', res)
                        },
                        fail: function (err) {
                                console.log('fail', err)
                        }
                });
        },
        handleBgm() {
                if (!this.data.livePusher.pauseBGM) {
                        wxp.showModal({
                                title: '提示',
                                content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后再试。',
                                showCancel: false,
                        });
                        return;
                }
                if (!this.data.bgmStart) return;
                this.setData({
                        bgmPaused: !this.data.bgmPaused
                }, () => {
                        if (this.data.bgmPaused) {
                                this.data.livePusher && this.data.livePusher.pauseBGM()
                        } else {
                                this.data.livePusher && this.data.livePusher.resumeBGM()
                        }
                })
        },
        onBgmStart(e) {
                console.log('onBgmStart', e);
        },
        onBgmProgress(e) {
                console.log('onBgmProgress', e);
        },
        onBgmComplete(e) {
                console.log('onBgmComplete', e);
        },
        // live-pusher 绑定推流事件，透传推流事件给 SDK
        onPushStateChange(e) {
                console.error('onPushStateChange', e.detail.code, e.detail.message);
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
        onPushError(e) {
                console.error('onPushError', e);
        },
        // live-player 绑定网络状态事件，透传网络状态事件给 SDK
        onPlayNetStateChange(e) {
               
                zg.updatePlayerNetStatus(e.currentTarget.id, e);
        },
        //live-player 绑定拉流事件，透传拉流事件给 SDK
        onPlayStateChange(e) {
                console.warn(e)
                zg.updatePlayerState(e.currentTarget.id, e);
        },
        async onReady() {
                console.log('onReady')
                zg = initSDK(this);
        },
        async reLogin() {
                try {
                        // await zg.logout();
                        let isLogin = await zg.loginRoom (this.data.roomID, this.data.token, {userID: this.data.userID, userName: 'nick' + this.data.userID}, { userUpdate: true });
                        isLogin ? console.log('login success') : console.error('login fail');
                        this.setData({
                                connectType: 1
                        });
                        console.log('pushStream: ', this.data.pushStreamID, this.data.livePusherUrl);
                        if (this.data.role == 1) {
                                const {
                                        url
                                } = await zg.startPublishingStream(this.data.pushStreamID);
                                console.log('url', this.data.livePusherUrl, url);
                                if (this.data.role == 1) {
                                        this.setData({
                                                livePusherUrl: url,
                                        }, () => {
                                                //this.data.livePusher.stop();
                                                this.data.livePusher.start();
                                        });
                                }
                        }
                } catch (error) {
                        console.error('error: ', error);
                }
        },
        onShow() {
                console.log('server: ', server);
                authCheck(this);
                if (zg && this.data.roomID) {
                        this.reLogin();
                }
                // 刷新全局变量
                zegoAppID = getApp().globalData.zegoAppID;
                server = getApp().globalData.server;
                if (this.data.bgmStart) {
                        this.bgmStartEvent()

                }
        },
        onHide() {
                this.logout();
        },
        onUnload() {
                this.logout();
                wx.offNetworkStatusChange()
        },
        onLoad() {
                // 监听网络状态
                this.onNetworkStatus();
        },
        onNetworkStatus() {
                wx.onNetworkStatusChange(res => {
                        if (res.isConnected && this.data.connectType === 1 && zg) {
                                console.log('connectType', this.data.connectType);
                                this.reLogin();
                        }
                })
        },
});