import {
        initSDK,
        authCheck,
        startPush,

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
                roomID: '127', // 房间ID
                token: '', // 服务端校验token
                pushStreamID: 'xcx-streamID-' + new Date().getTime(), // 推流ID
                livePusherUrl: '', // 推流地址
                livePusher: null, // live-pusher 的 Context，内部只有一个对象
                userID: 'choui', // 用户ID,
                livePlayerList: [],
                connectType: -1, // -1为初始状态，1为连接，0断开连接
                canShow: -1,
                role: '',
                roomUserList: [],
                handupStop: false,
                mirror: true,
                num: 0,
                livePlaying: []
        },
        bindKeyInput(e) {
                if (e.target.dataset && e.target.dataset.role == "roomID") {
                        this.setData({
                                roomID: e.detail.value
                        });
                } else if (e.target.dataset && e.target.dataset.role == "userID") {
                        this.setData({
                                userID: e.detail.value
                        });
                } else if (e.target.dataset && e.target.dataset.role == "token") {
                        this.setData({
                                token: e.detail.value
                        });
                }

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
                if (!this.data.userID) {
                        wxp.showModal({
                                title: '提示',
                                content: '请输入用户ID',
                                showCancel: false,
                        });
                        return;
                }
                if (!this.data.token) {
                        wxp.showModal({
                                title: '提示',
                                content: '请输入token',
                                showCancel: false,
                        });
                        return;
                }
                if (this.data.connectType !== 1) {
                        try {

                                /** 开始登录房间 */
                                let isLogin = await zg.loginRoom(this.data.roomID, this.data.token, {
                                        userID: this.data.userID,
                                        userName: 'nick' + this.data.userID
                                }, {
                                        userUpdate: true
                                });
                                isLogin ? console.log('login success') : console.error('login fail');
                                zg.setLogConfig({
                                        logURL: 'https://weblogger560224782-api.e-business.net.cn/httplog'
                                })
                                this.setData({
                                        connectType: 1
                                });
                        } catch (error) {
                                console.error('error: ', error);
                                return;
                        }
                }
                this.setData({
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
                        /** 登出房间 */
                        if (zg && this.data.connectType === 1) await zg.logoutRoom();
                } catch (error) {
                        console.error('error: ', error);
                }

        },
        // live-pusher 绑定推流事件，透传推流事件给 SDK
        onPushStateChange(e) { 
                if (e.detail.code === 5000) {
                        this.setData({
                                handupStop: true
                        })
                }
                zg.updatePlayerState(this.data.pushStreamID, e);
        },
        binddatachange(e) {
                console.log(e)
        },
        // live-pusher 绑定网络状态事件，透传网络状态事件给 SDK
        onPushNetStateChange(e) {
                console.error('onPushNetStateChange', e)
                zg.updatePlayerNetStatus(this.data.pushStreamID, e);
        },
        // live-player 绑定网络状态事件，透传网络状态事件给 SDK
        onPlayNetStateChange(e) {
                zg.updatePlayerNetStatus(e.currentTarget.id, e);
        },
        //live-player 绑定拉流事件，透传拉流事件给 SDK
        onPlayStateChange(e) {
                zg.updatePlayerState(e.currentTarget.id, e);
        },
        //更新鉴权token
        renewToken() {
                zg.renewToken(this.data.token);
        },
        publishStream() {
                startPush(this);
                this.setData({
                        role: 1
                })
        },
        async onReady() {
                getApp().globalData.zegoAppID = 383110717;
                getApp().globalData.server = 'wss://webliveroom383110717-api.zego.im/ws';
                console.log('onReady')
                zg = initSDK(this);
                console.log('sdk version: ', zg.getVersion());

                // 覆盖全局回调, 只是为了特殊处理推流鉴权失败, 主动停止推流
                zg.off("publisherStateUpdate")
                zg.on("publisherStateUpdate", (result) => {
                        console.error("publishStateUpdate", result);
                        if (result.state === "NO_PUBLISH") {
                                zg.stopPublishingStream(this.data.pushStreamID);
                                this.data.livePusher.stop();
                                this.setData({
                                        livePusherUrl: ''
                                });
                        }
                });
        },

        async reLogin() {
                try {
                        await zg.logoutRoom(); 
                        console.error("登录房间roomid22" + this.data.roomID)
                        let isLogin = await zg.loginRoom(this.data.roomID, this.data.token, {
                                userID: this.data.userID,
                                userName: 'nick' + this.data.userID
                        });
                        isLogin ? console.log('login success') : console.error('login fail');
                        this.setData({
                                connectType: 1
                        });
                        console.log('pushStream: ', this.data.pushStreamID, this.data.livePusherUrl, this.data.role);
                        if (this.data.role == 1) {
                                const {
                                        url
                                } = await zg.startPublishingStream(this.data.pushStreamID);
                                console.log('url', this.data.livePusherUrl, url);
                                if (this.data.livePusherUrl !== url) {
                                        this.setData({
                                                livePusherUrl: url,
                                        }, () => {
                                                // this.data.livePusher.stop();
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
                if (zg && this.data.roomID) {
                        this.reLogin();
                }

        },
        onHide() {
                this.logout();
        },
        onUnload() {
                getApp().globalData.zegoAppID = 1739272706;
                getApp().globalData.server = 'wss://webliveroom-test.zego.im/ws';
                this.logout();
                wx.offNetworkStatusChange()
        },
        onLoad() {

        }
});