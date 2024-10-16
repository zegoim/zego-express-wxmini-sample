import {
        wxp
} from '../../app';
import {
        getTokenAndUserID
} from '../../utils/server';
import {
        initSDK,
        authCheck,
        startPush,
        republish
} from '../../utils/common';

let {
        zegoAppID,
        server
} = getApp().globalData;
let zg;
Page({

        /**
         * 页面的初始数据
         */
        data: {
                roomID: '', // 房间ID
                token: '', // 服务端校验token
                pushStreamID: 'xcx-' + new Date().getTime(), // 推流ID
                livePusherUrl: '', // 推流地址
                livePusher: null, // live-pusher 的 Context，内部只有一个对象
                userID: '', // 用户ID,
                livePlayerList: [],
                connectType: -1, // -1为初始状态，1为连接，0断开连接
                handupStop: false,
                canShow: -1,
                roomUserList: [],
                mixStreamStart: false,
                autoMixStreamStart: false,
                mixStreamID: '', // 'xcx-mixS-' + new Date().getTime(),
                mixTaskID: '', // 'xcx-mixT-' + new Date().getTime(),
                mixPlayerUrls: [],
                isRelogin: false,
                isMixing: false,
                mixContent: '',
                bgColor: "0xff0000",
                bgImg: '',
                enableCamera: true,
                // width: 240,
                // height: 320,
                // bitrate: 300,
                fps: 25
        },
        // 输入的房间 ID
        bindKeyInput(e) {
                this.setData({
                        roomID: e.detail.value,
                })
        },
        bindBgColorInput(e) {
                this.setData({
                        bgColor: e.detail.value,
                })
        },
        bindBgImgInput(e) {
                this.setData({
                        bgImg: e.detail.value,
                })
        },
        bindFpsInput(e) {
                this.setData({
                        fps: parseInt(e.detail.value)
                })
        },
        bindPushStreamInput(e) {
                this.setData({
                        pushStreamID: e.detail.value
                })
        },
        bindMixerInput(e) {
                console.warn("mix", e.detail.value)
                this.setData({
                        mixContent: e.detail.value
                })
        },
        // toggleCamera() {
        //         this.setData({
        //                 enableCamera: !this.data.enableCamera
        //         })
        // },
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
                                /** 获取token, userID */
                                this.setToken()
                                let isLogin = await zg.loginRoom(this.data.roomID, this.data.token, {
                                        userID: this.data.userID,
                                        userName: 'nick' + this.data.userID
                                });
                                isLogin ? console.log('login success') : console.error('login fail');
                                this.setData({
                                        isRelogin: true,
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
                this.setData({
                        role: e.target.dataset.role
                })
        },
        async mixStream() {
                this.startMixing()
        },
        async stopMixStream() {
                try {
                        const {
                                errorCode
                        } = await zg.stopMixerTask(this.data.mixTaskID)
                        console.log('stopMixerTask ', errorCode)
                        if (this.data.mixPlayerUrls.length > 0) {
                                this.data.mixPlayerUrls.forEach((item) => {
                                        zg.stopPlayingStream(item.streamID);
                                })
                                this.setData({
                                        mixPlayerUrls: [],
                                        isMixing: false
                                })
                        }
                } catch (error) {
                        console.error('error: ', error);
                }
        },
        async startMixing() {
                // const inputList = [{
                //         streamID: this.data.pushStreamID,
                //         contentType: 'video',
                //         layout: {
                //                 top: 0,
                //                 left: 0,
                //                 bottom: 480,
                //                 right: 640,
                //         }
                // }];
                // if (this.data.livePlayerList.length > 0) {
                //         const playerStream = this.data.livePlayerList[0]
                //         inputList.push({
                //                 streamID: playerStream.streamID,
                //                 contentType: 'video',
                //                 layout: {
                //                         top: 480,
                //                         left: 0,
                //                         bottom: 960,
                //                         right: 640
                //                 }
                //         });
                // }
                // this.data.mixStreamID = 'xcx-mixS-' + new Date().getTime();
                // this.data.mixTaskID = 'xcx-mixT-' + new Date().getTime();
                // const outputList = [{
                //         target: this.data.mixStreamID,
                // }]
                // const outputConfig = {
                //         outputBitrate: 800 * 1000,
                //         outputFPS: 15,
                //         outputWidth: 640,
                //         outputHeight: 960,
                // }
                // const mixParam = {
                //         taskID: this.data.mixTaskID,
                //         inputList: inputList,
                //         outputList,
                //         outputConfig
                // };
                // console.log('mixParam', mixParam);
                // this.setData({
                //         mixContent: JSON.stringify(mixParam)
                // })
                if (!this.data.mixContent) {
                  wxp.showModal({
                    title: '提示',
                    content: '请输入混流信息',
                    showCancel: false,
                  });
                  return;
                }
                if (this.data.bgColor) {
                        await zg.setMixerTaskConfig({
                                backgroundColor: parseInt(this.data.bgColor, 16)
                        });
                }
                if (this.data.bgImg) {
                        await zg.setMixerTaskConfig({
                                backgroundImage: this.data.bgImg
                        });
                }
                let mixParam;
                try {
                        console.error("mixContent", this.data.mixContent)
                        mixParam = JSON.parse(this.data.mixContent)
                } catch (error) {
                        console.warn(error)
                }
                try {
                        // const mixParam = JSON.parse(this.data.mixContent)
                        const result = await zg.startMixerTask(mixParam)
                        console.log('mixPlayInfoList: ', result);
                        const _mixPlayerUrls = []
                        if (result.errorCode !== 0) {
                                console.error('mix fail', result);
                        }
                        if (this.data.isMixing) {
                                console.warn('is mixing');
                        }
                        const { taskID, outputList } = mixParam;
                        this.data.mixTaskID = taskID;
                        if (outputList.length == 0) {
                                console.error('no output');
                                return
                        }
                        let mixOutput;
                        if (typeof outputList[0] === 'object' && outputList[0].target) {
                                mixOutput = outputList[0].target
                        } else {
                                mixOutput = outputList[0]
                        }
                        if (mixOutput.startsWith('rtmp')) {
                                wxp.showModal({
                                        title: '提示',
                                        content: '请使用 CDN 地址或指定流 ID 拉流',
                                        showCancel: false,
                                });
                        } else {
                                this.data.mixStreamID = mixOutput
                                const {
                                        streamID,
                                        url
                                } = await zg.startPlayingStream(this.data.mixStreamID, {
                                        isMix: true
                                })
                                console.log('>>>[liveroom-room] startPlayingStream, streamID: ', streamID, ' url: ', url);
                                _mixPlayerUrls.push({
                                        streamID,
                                        url
                                })
                                this.setData({
                                        mixStreamID: this.data.mixStreamID,
                                        mixTaskID: this.data.mixTaskID,
                                        mixPlayerUrls: _mixPlayerUrls,
                                        isMixing: true
                                })
                        }
                        

                        
                } catch (err) {
                        console.error('startMixerTask err: ', err);
                        this.setData({
                                isMixing: false
                        })
                };
        },

        async autoMixStream() {
                if (!this.data.mixContent) {
                        wxp.showModal({
                                title: '提示',
                                content: '请输入混流信息',
                                showCancel: false,
                        });
                        return;
                }
                let mixParam;
                try {
                        mixParam = JSON.parse(this.data.mixContent)
                } catch (error) {
                        console.warn(error)
                }
                try {
                        const result = await zg.startAutoMixerTask(mixParam)
                        console.warn('startAutoMixerTask: ', result);
                        const _mixPlayerUrls = []
                        if (result.errorCode !== 0) {
                                console.error('mix fail', result);
                        }
                        const { taskID, outputList } = mixParam;
                        this.data.mixTaskID = taskID;
                        if (outputList.length == 0) {
                                console.error('no output');
                                return
                        }
                        let mixOutput;
                        if (typeof outputList[0] === 'object' && outputList[0].target) {
                                mixOutput = outputList[0].target
                        } else {
                                mixOutput = outputList[0]
                        }
                        if (mixOutput.startsWith('rtmp') || mixOutput.startsWith('avertp')) {
                                wxp.showModal({
                                        title: '提示',
                                        content: '请使用 CDN 地址或指定流 ID 拉流',
                                        showCancel: false,
                                });
                        } else {
                                this.data.mixStreamID = mixOutput
                                const {
                                        streamID,
                                        url
                                } = await zg.startPlayingStream(this.data.mixStreamID, {
                                        isMix: true
                                })
                                console.log('>>>[liveroom-room] startPlayingStream, streamID: ', streamID, ' url: ', url);
                                _mixPlayerUrls.push({
                                        streamID,
                                        url
                                })
                                this.setData({
                                        mixStreamID: this.data.mixStreamID,
                                        mixTaskID: this.data.mixTaskID,
                                        mixPlayerUrls: _mixPlayerUrls,
                                        // isMixing: true
                                })
                        }
                        

                        
                } catch (err) {
                        console.error('startAutoMixerTask err: ', err);
                        this.setData({
                                // isMixing: false
                        })
                };
        },
        async stopAutoMixStream() {
                if (!this.data.mixContent) {
                        wxp.showModal({
                                title: '提示',
                                content: '请输入混流信息',
                                showCancel: false,
                        });
                        return;
                }
                try {
                        const mixParam = JSON.parse(this.data.mixContent)
                        const result = await zg.stopAutoMixerTask(mixParam)
                        if (this.data.mixPlayerUrls.length > 0) {
                                this.data.mixPlayerUrls.forEach((item) => {
                                        zg.stopPlayingStream(item.streamID);
                                })
                                this.setData({
                                        mixPlayerUrls: [],
                                        isMixing: false
                                })
                        }
                        console.log('startAutoMixerTask suc: ', result);
                } catch (err) {
                        console.error('startAutoMixerTask fail: ', JSON.stringify(err));
                }
        },
        publishStream() {
                startPush(this);
        },
        // 停止推流
        stopPushStream() {
                this.data.livePusher.stop();
                this.setData({
                        livePusherUrl: ''
                });
                zg.stopPublishingStream(this.data.pushStreamID);

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
                                this.data.livePlayerList.forEach((item) => {
                                        zg.stopPlayingStream(item.streamID);
                                });
                                this.setData({
                                        livePlayerList: []
                                });
                        }
                        if (this.data.mixPlayerUrls.length > 0) {
                                this.data.mixPlayerUrls.forEach((item) => {
                                        zg.stopPlayingStream(item.streamID);
                                });
                                this.setData({
                                        mixPlayerUrls: [],
                                        isMixing: false
                                });
                        }
                        if (zg && this.data.connectType === 1) await zg.logoutRoom(this.data.roomID);
                } catch (error) {
                        console.error('error: ', error);
                }
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
        // live-player 绑定网络状态事件，透传网络状态事件给 SDK
        onPlayNetStateChange(e) {
                console.warn("onPlayNetStateChange", e.detail)
                zg.updatePlayerNetStatus(e.currentTarget.id, e);
        },
        //live-player 绑定拉流事件，透传拉流事件给 SDK
        onPlayStateChange(e) {
                zg.updatePlayerState(e.currentTarget.id, e);
        },
        async onReady() {
                zg = initSDK(this);
        },
        async reLogin() {
                try {
                        await zg.logoutRoom();
                        let isLogin = await zg.loginRoom(this.data.roomID, this.data.token, {
                                userID: this.data.userID,
                                userName: 'nick' + this.data.userID
                        }, {
                                userUpdate: true
                        });
                        isLogin ? console.log('login success') : console.error('login fail');
                        this.setData({
                                connectType: 1,
                                isRelogin: true
                        });
                        console.log('pushStream: ', this.data.pushStreamID, this.data.livePusherUrl);
                        await republish(this)
                        if (this.data.isMixing) {
                                this.startMixing();
                        }
                } catch (error) {
                        console.error('error: ', error);
                }
        },
        onShow() {
                console.log('server: ', server);
                authCheck(this);
                // if (zg && this.data.roomID) {
                //         this.reLogin();
                // }
                // 刷新全局变量
                zegoAppID = getApp().globalData.zegoAppID;
                server = getApp().globalData.server;
                this.setToken()
                const taskID = 'mixTask-' + new Date().getTime();
                const mixStreamID = 'mixStream-' + new Date().getTime();
                this.setData({
                        mixContent: `
                                {
                                        "taskID": "${taskID}" ,
                                        "inputList": [
                                                {
                                                "streamID": "${this.data.pushStreamID}",
                                                "layout": { 
                                                        "top": 0, 
                                                        "left": 0, 
                                                        "bottom": 200, 
                                                        "right": 200 
                                                },
                                                "volume": 100,
                                                "contentType": "VIDEO",
                                                "isAudioFocus": false
                                                }
                                        ],
                                        "outputList": [
                                                {
                                                        "target": "${mixStreamID}",
                                                        "videoConfig": {
                                                                "videoCodecID": "H.264"
                                                        }
                                                }
                                        ],
                                        "outputConfig": {
                                                "outputBitrate": 300,
                                                "outputFPS": 15,
                                                "outputWidth": 400,
                                                "outputHeight": 400
                                        }
                                }
                        `
                })
        },
        onUnload() {
                this.logout();
                wx.offNetworkStatusChange()
        },
        onHide() {
                // this.logout();
        },
        onLoad() {
                // 监听网络状态
                this.onNetworkStatus();
        },
        onNetworkStatus() {
                wx.onNetworkStatusChange(res => {
                        console.error('net', res);
                        if (res.isConnected && this.data.connectType === 1 && zg) {
                                console.log('connectType', this.data.connectType);
                                this.reLogin();
                                const urls = this.data.mixPlayerUrls
                                this.setData({
                                        mixPlayerUrls: urls.map(item => ({
                                                ...item,
                                                url: ''
                                        })),
                                }, () => {
                                        this.setData({
                                                mixPlayerUrls: urls,
                                        })
                                })
                        }
                })
        },
        changeToken() {
                this.setData({ token: e.detail.value });
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