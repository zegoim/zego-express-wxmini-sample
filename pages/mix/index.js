
import { wxp } from '../../app';
import { getLoginToken } from '../../utils/server';
import { initSDK, authCheck, startPush } from '../../utils/common';

let { zegoAppID, server } = getApp ().globalData;
let zg;
Page({

        /**
         * 页面的初始数据
         */
        data: {
                roomID: '',     // 房间ID
                token: '',      // 服务端校验token
                pushStreamID: 'xcx-streamID-' + new Date ().getTime (), // 推流ID
                livePusherUrl: '',      // 推流地址
                livePusher: null,       // live-pusher 的 Context，内部只有一个对象
                userID: 'xcx-userID-' + new Date ().getTime (), // 用户ID,
                livePlayerList: [],
                connectType: -1,  // -1为初始状态，1为连接，0断开连接
                handupStop: false,
                canShow: -1,
                roomUserList: [],
                mixStreamStart: false,
                mixStreamID: 'xcx-mixS-' + new Date().getTime(),
                mixTaskID: 'xcx-mixT-' + new Date().getTime(),
                mixPlayerUrls: []
        },
        // 输入的房间 ID
        bindKeyInput(e) {
                this.setData({
                        roomID: e.detail.value,
                })
        },
        async openRoom(e) {
                if (!this.data.roomID) {
                        wxp.showModal ({
                                title: '提示',
                                content: '请输入房间号',
                                showCancel: false,
                        });
                        return;
                }
                if (this.data.connectType !== 1) {
                        try {
                                let token = await getLoginToken (zegoAppID, this.data.userID);
                                this.setData({ token });
                                let isLogin = await zg.loginRoom (this.data.roomID, this.data.token, {userID: this.data.userID, userName: 'nick' + this.data.userID});
                                isLogin ? console.log('login success') : console.error('login fail');
                                this.setData({
                                        connectType: 1
                                });
                        } catch(error) {
                                console.error('error: ', error);
                                return;
                        }
                }
                // 创建房间，开始推流
                if (e.target.dataset && e.target.dataset.role == 1 && this.data.livePusherUrl === '') {
                        startPush(this);
                }
        },
        async mixStream() {
                this.setData({
                        mixStreamStart: !this.data.mixStreamStart
                })
                if (this.data.mixStreamStart) {
                        const inputList = [{
                                streamID: this.data.pushStreamID,
                                contentType	: 'video',
                                layout: {
                                        top: 0,
                                        left: 0,
                                        bottom: 480,
                                        right: 640,
                                }
                        }];
                        if (this.data.livePlayerList.length > 0) {
                                const playerStream = this.data.livePlayerList[0]
                                inputList.push({
                                        streamID: playerStream.streamID,
                                        contentType	: 'video',
                                        layout: {
                                                top: 480,
                                                left: 0,
                                                bottom: 960,
                                                right: 640
                                        }
                                });
                        }
                        const outputList = [{
                                target: this.data.mixStreamID,
                        }]
                        const outputConfig = {
                                outputBitrate: 800 * 1000,
                                outputFPS: 15,
                                outputWidth: 640,
                                outputHeight: 960,
                        }
                        const mixParam = {
                                taskID: this.data.mixTaskID,
                                inputList: inputList,
                                outputList,
                                outputConfig
                        };
                        console.log('mixParam', mixParam);
                        try {
                                const result = await zg.startMixerTask(mixParam)
                                console.log('mixPlayInfoList: ', result);
                                const _mixPlayerUrls = []
                                if (result.errorCode !== 0) {
                                  console.error('mix fail', result);
                                }
                                const { streamID, url } = await zg.startPlayingStream(this.data.mixStreamID, { isMix: true })
                                console.log('>>>[liveroom-room] startPlayingStream, streamID: ', streamID, ' url: ', url);
                                _mixPlayerUrls.push({ streamID, url })
                                this.setData({
                                        mixPlayerUrls: _mixPlayerUrls
                                })
                        } catch (err) {
                                console.log('err: ', err);
                        };
                } else {
                        try {
                                const { errorCode } = await zg.stopMixerTask(this.data.mixTaskID)
                                console.log('stopMixerTask ', errorCode)
                                if (this.data.mixPlayerUrls.length > 0) {
                                        this.data.mixPlayerUrls.forEach((item) => {
                                                zg.stopPlayingStream(item.streamID);
                                        })
                                        this.setData({
                                                mixPlayerUrls: []
                                        })
                                }
                        } catch (error) {
                                console.error('error: ', error);
                        }

                }
        },
        async logout() {
                try {
                        if (this.data.livePusherUrl) {
                                zg.stopPublishingStream (this.data.pushStreamID);
                                this.data.livePusher.stop ();
                                this.setData ({ livePusherUrl: '' });
                        }
                        if (this.data.livePlayerList.length > 0) {
                                this.data.livePlayerList.forEach ((item) => {
                                        zg.stopPlayingStream (item.streamID);
                                });
                                this.setData ({ livePlayerList: [] });
                        }
                        if (this.data.mixPlayerUrls.length > 0) {
                                this.data.mixPlayerUrls.forEach ((item) => {
                                        zg.stopPlayingStream (item.streamID);
                                });
                                this.setData ({ mixPlayerUrls: []});
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
        async onReady() {
                zg = initSDK (this);
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
        onUnload() {
                this.logout();
        },
        onHide() {
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
