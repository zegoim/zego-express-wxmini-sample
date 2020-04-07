import { ZegoExpressEngine } from 'zego-express-engine-miniprogram';
import { getLoginToken } from '../../utils/server';
import { initSDK, authCheck, startPush } from '../../utils/common';
import { wxp } from '../../app';

let { zegoAppID, server } = getApp ().globalData;

let zg;

Page({
        data: {
                roomID: '',     // 房间ID
                token: '',
                pushStreamID: 'xcx-streamID-' + new Date().getTime(), // 推流ID
                livePusherUrl: '',      // 推流地址
                livePusher: null,       // live-pusher 的 Context，内部只有一个对象
                userID: 'xcx-userID-' + new Date().getTime(), // 用户ID,
                livePlayerList: [],
                connectType: -1,  // -1为初始状态，1为连接，0断开连接
                canShow: -1,
                roomUserList: []
        },
        bindKeyInput() {
                this.setData({ roomID: e.detail.value });
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
                zg.updatePlayerState(this.data.pushStreamID, e);
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
                console.log('onReady')
                zg = initSDK(this);
        },
        onShow() {
                console.log('onShow')
                console.log('server: ', server);
                authCheck(this);
                zegoAppID = getApp ().globalData.zegoAppID;
                server = getApp ().globalData.server;
        },
        onUnload() {
                this.logout();
        }
});
