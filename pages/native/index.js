
import { wxp } from '../../app';
import { getLoginToken } from '../../utils/server';
import { initSDK, authCheck, startPush } from '../../utils/common';

let { zegoAppID, server } = getApp ().globalData;
let zg;
Page({
        data: {
                roomID: '',     // 房间ID
                token: '',      // 服务端校验token
                pushStreamID: 'xcx-streamID-' + new Date().getTime(), // 推流ID
                livePusherUrl: '',      // 推流地址
                livePusher: null,       // live-pusher 的 Context，内部只有一个对象
                userID: 'xcx-userID-' + new Date().getTime(), // 用户ID,
                livePlayerList: [],
                connectType: -1,  // -1为初始状态，1为连接，0断开连接
                handupStop: false,
                canShow: -1,
                roomUserList: [],
                pushConfig: {           // 推流配置项
                        mode: 'RTC',
                        aspect: '3:4',        // 画面比例，取值为 3:4, 或者 9:16
                        minBitrate: 200,      // 最小视频编码码率
                        maxBitrate: 500,      // 最大视频编码码率
                        isBeauty: 6,          // 美颜程度，取值范围 [0,9]
                        isWhiteness: 6,       // 美白程度，取值范围 [0,9]
                        muted: false,         // 推流是否静音
                        showLog: false,       // 是否显示 log
                        frontCamera: true,    // 前后置摄像头，false 表示后置
                        enableCamera: true,   // 是否开启摄像头
                        isMirror: false,      // 画面是否镜像
                        orientation: 'vertical',
                        audioReverbType: 1
                },
                playConfig: {
                        fullScreen: false
                },
        },
        // 输入的房间 ID
        bindKeyInput(e) {
                this.setData({
                        roomID: e.detail.value,
                })
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
                                this.setData({ token });
                                let isLogin = await zg.loginRoom (this.data.roomID, this.data.token, {userID: this.data.userID, userName: 'nick' + this.data.userID}, { userUpdate: true });
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
        },
        async logout() {
                try {
                        if (this.data.livePusherUrl) {
                                zg.stopPublishingStream(this.data.pushStreamID);
                                this.data.livePusher.stop();
                                this.setData({ livePusherUrl: '' });
                        }
                        if (this.data.livePlayerList.length > 0) {
                                this.data.livePlayerList.forEach(async (item) => {
                                        zg.stopPlayingStream(item.streamID);
                                });
                                this.setData({ livePlayerList: [] });
                        }
                        // 退出登录
                        if (zg && this.data.connectType === 1) await zg.logoutRoom(this.data.roomID);
                } catch (error) {
                        console.error('error: ', error);
                }

        },
        // live-pusher 绑定推流事件，透传推流事件给 SDK
        onPushStateChange(e) {
                console.error('onPushStateChange', e.detail.code, e.detail.message);
                if (e.detail.code === 5000) {
                        this.setData({ handupStop: true })
                        // this.data.livePusher && (this.data.livePusher! as wx.LivePusherContext).stop();
                }
                zg.updatePlayerState (this.data.pushStreamID, e);
        },
        // live-pusher 绑定网络状态事件，透传网络状态事件给 SDK
        onPushNetStateChange(e) {
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
        onPushError(e) {
                console.log(e);
        },
        onPlayError(e) {
                console.log(e);
        },
        onPushAudiovolumenotify(e) {
                console.log('onPushAudiovolumenotify', e.detail.volume);
        },
        onPlayAudiovolumenotify(e) {
                console.log('onPlayAudiovolumenotify', e.detail.volume);
        },
        async onReady() {
                zg = initSDK(this);
        },
        // 推流画面配置
        switchCamera() {
                this.data.pushConfig.frontCamera = !this.data.pushConfig.frontCamera;
                this.setData({
                        pushConfig: this.data.pushConfig,
                });
                this.data.livePusher && this.data.livePusher.switchCamera();
        },
        // 开关摄像头
        // toggleCamera() {
        //         this.setData({
        //                 "pushConfig.enableCamera": !this.data.pushConfig.enableCamera
        //         })
        // },
        // 开关麦克风
        enableMute() {
                this.setData({
                        "pushConfig.muted": !this.data.pushConfig.muted
                })
        },
        // 设置镜像
        setMirror() {
                this.setData({
                        "pushConfig.isMirror": !this.data.pushConfig.isMirror
                })
        },
        setBeauty() {
                const beauty = this.data.pushConfig.isBeauty === 0 ? 6 : 0;
                this.setData({
                        "pushConfig.isBeauty": beauty
                })
        },
        setWhiteness() {
                const whiteness = this.data.pushConfig.isWhiteness === 0 ? 6 : 0;
                this.setData({
                        "pushConfig.isWhiteness": whiteness
                })
        },
        toggleOrientation() {
                const orientation = this.data.pushConfig.orientation === 'vertical' ? 'horizontal' : 'vertical'
                this.setData({
                        "pushConfig.orientation": orientation
                })
        },
        showLog() {
                this.setData({
                        "pushConfig.showLog": !this.data.pushConfig.showLog
                })
        },
        toggleFullScreen(event) {
                this.setData({
                        'playConfig.fullScreen': !this.data.playConfig.fullScreen
                }, () => {
                        console.log('>> fullScreen: ', this.data.playConfig.fullScreen);
                        const ID = event.target.ID.replace('s-', '');
                        const livePlayer = wx.createLivePlayerContext(ID);
                        if (this.data.playConfig.fullScreen) {
                                livePlayer.requestFullScreen({ direction: 0 });
                        } else {
                                livePlayer.exitFullScreen();
                        }
                });
        },
        async reLogin() {
                try {
                        // await zg.logout();
                        let isLogin = await zg.loginRoom (this.data.roomID, this.data.token, {userID: this.data.userID, userName: 'nick' + this.data.userID});
                        isLogin ? console.log('login success') : console.error('login fail');
                        this.setData({
                                connectType: 1
                        });
                        console.log('pushStream: ', this.data.pushStreamID, this.data.livePusherUrl);
                        if (this.data.livePusherUrl) {
                                const { url } = await zg.startPublishingStream(this.data.pushStreamID);
                                console.log('url', this.data.livePusherUrl, url);
                                if (this.data.livePusherUrl !== url) {
                                        this.setData({
                                                livePusherUrl: url,
                                        }, () => {
                                                this.data.livePusher.stop();
                                                this.data.livePusher.start();
                                        });
                                }
                        }
                } catch(error) {
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
                zegoAppID = getApp ().globalData.zegoAppID;
                server = getApp ().globalData.server;
        },
        onHide() {
                this.logout();
        },
        onUnload() {
                this.logout();
        },
        onLoad() {
                // 监听网络状态
                this.onNetworkStatus();
        },
        onNetworkStatus() {
                wx.onNetworkStatusChange(res => {
                        console.error('net', res);
                        if (res.isConnected && this.data.connectType === 0 && zg) {
                                console.log('connectType', this.data.connectType);
                                this.reLogin();
                        }
                })
        },
});
