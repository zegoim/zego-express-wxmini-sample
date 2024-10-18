//import { ZegoExpressEngine } from 'zego-express-engine-miniprogram';
import { getTokenAndUserID } from '../../utils/server';
import { format } from '../../utils/util';
import { wxp } from '../../app';
import { initSDK, destroySDK, authCheck, startPush, republish } from '../../utils/common';

let { zegoAppID, server } = getApp ().globalData;
let zg;
Page({
        data: {
                roomID: '',     // 房间ID
                token: '',      // 服务端校验token
                pushStreamID: 'xcx-streamID-' + new Date ().getTime (), // 推流ID
                livePusherUrl: '',      // 推流地址
                livePusher: null,       // live-pusher 的 Context，内部只有一个对象
                userID: '', // 用户ID,
                livePlayerList: [],
                connectType: -1,  // -1为初始状态，1为连接，0断开连接
                handupStop: false,
                canShow: -1,
                roomUserList: [],
                scrollToView: "",
                messageList: [],
                inputMessage: "",
                isRelogin: false
        },
        async bindCallback() {
                zg.on('IMRecvBroadcastMessage', (roomID, chatData) => {
                        console.log('IMRecvBroadcastMessage',roomID, chatData);
                        const isImg = /.(gif|jpg|jpeg|png|gif|jpg|png)$/.test(chatData[0].message);
                        let message = {
                                id: chatData[0].fromUser.userID + chatData[0].sendTime,
                                name: chatData[0].fromUser.userName,
                                // @ts-ignore
                                time: format(result[0].sendTime),
                                content: chatData[0].message,
                                isImg
                        }
                        this.setData({
                                messageList: [...this.data.messageList, message],
                                scrollToView: message.id,
                        });
                });
        },
        bindKeyInput(e) {
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
                                let isLogin = await zg.loginRoom (this.data.roomID, this.data.token, {userID: this.data.userID, userName: 'nick' + this.data.userID}, { userUpdate: true });
                                isLogin ? console.log('login success') : console.error('login fail');
                                this.setData({
                                        isRelogin: true,
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
                this.setData ({
                        role: e.target.dataset.role 
                })
        },
        async snapshot(e) {
              
                const sucCallback = async (ret) => {
                        console.log('ret', ret.tempImagePath);
                        wxp.showLoading({ title: '正在上传...' });
                        const imgPath = 'sdk-doc/mini-snapshot-' + new Date().getTime() + '.jpg'
                        // // 上传图片
                        // const res = await wxp.uploadFile({
                        //         //  服务器上传图片接口地址
                        //         url: 'https://doc.oa.zego.im/doc/uploadAliyunSource',
                        //         filePath: ret.tempImagePath,
                        //         name: 'file',
                        //         header: {
                        //                 'Content-Type': 'application/x-www-form-urlencoded',
                        //         },
                        //         formData: {
                        //                 'path': imgPath,
                        //                 'space': 'DemoSpace'
                        //         },
                        // })
                        // console.log('res', res);
                        // const data = JSON.parse(res.data);
                        // if (data.code == 200) {
                        //         wxp.hideLoading();
                        //         wxp.showToast({
                        //                 title: '发送成功',
                        //                 duration: 1000,
                        //                 mask: true
                        //         });
                        // } else {
                        //         wxp.hideLoading()
                        //         wxp.showToast({
                        //                 title: '上传失败',
                        //                 duration: 1000,
                        //                 mask: true
                        //         })
                        // }
                        // // 服务器存储图片地址
                        // const msg = 'https://zego-sdkdemospace.oss-cn-shanghai.aliyuncs.com/' + imgPath;
                        // // 发送图片URL
                        // try {
                        //         const res = await zg.sendBroadcastMessage(this.data.roomID, msg);
                        //         console.log('sendMsg success', res);
                        // } catch (error) {
                        //         console.log('sendMsg, error: ', error);
                        //         wxp.hideLoading();
                        //         wxp.showToast({
                        //                 title: '发送失败',
                        //                 duration: 1000,
                        //                 mask: true
                        //         });
                        // };
                        setTimeout(async () => {
                                const saveRes = await wxp.showModal({
                                        title: '提示',
                                        content: '是否保存到手机相册',
                                });
                                if (saveRes.confirm) {
                                        console.log('saveImageToPhotosAlbum confirm');
                                        wxp.hideLoading()
                                        this._saveImageToPhotosAlbum(ret.tempImagePath);
                                } else if (saveRes.cancel) {
                                        wxp.hideLoading();
                                        console.log('saveImageToPhotosAlbum cancel');
                                }
                        }, 3000)
                }
                const failCallback = (err) => {
                        console.log('snapshot fail', err)
                }
                if (e.target.dataset && e.target.dataset.type == "1") {
                        this.data.livePusher && this.data.livePusher.snapshot({
                                success: sucCallback,
                                fail: failCallback,
                        });
                } else if (e.target.dataset && e.target.dataset.type == "0") {
                        // show live-player how to use snapshot
                        const _livePlayer = this.data.livePlayerList[0]
                        const livePlayerContext = wx.createLivePlayerContext(_livePlayer.streamID)
                        livePlayerContext.snapshot({
                                success: sucCallback,
                                fail: failCallback,
                        });
                }
        },
        async _saveImageToPhotosAlbum(imgPath) {
                // 保存图片到本地相册
                const settingInfo = await wxp.getSetting({});
                if (!settingInfo.authSetting['scope.writePhotosAlbum']) {
                        await wxp.authorize({ scope: 'scope.writePhotosAlbum' })
                        console.log('授权成功')
                        try {
                                const res =  await wxp.saveImageToPhotosAlbum({ filePath: imgPath });
                                console.log('writePhotosAlbum', res);
                        } catch(err) {
                                console.log('writePhotosAlbum', err);
                        }
                } else if (settingInfo.authSetting['scope.writePhotosAlbum']) {
                        try {
                                const res =  await wxp.saveImageToPhotosAlbum({ filePath: imgPath });
                                console.log('writePhotosAlbum', res);
                        } catch(err) {
                                console.log('writePhotosAlbum', err);
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
                                this.data.livePlayerList.forEach (async (item) => {
                                        zg.stopPlayingStream (item.streamID);
                                });
                                this.setData ({ livePlayerList: [] });
                        }
                        // 退出登录
                        if (zg && this.data.connectType === 1) await zg.logoutRoom(this.data.roomID);
                } catch(error) {
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
                this.bindCallback();
        },
        async reLogin() {
                try {
                         await zg.logoutRoom();
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
                        republish(this)
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
                zegoAppID = getApp ().globalData.zegoAppID;
                server = getApp ().globalData.server;
        },
        onHide() {
                this.logout();
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
                        console.error('net', res);
                        wxp.hideLoading();
                        console.error('connectType', this.data.connectType);
                        if (res.isConnected && this.data.connectType === 1 && zg) {
                                console.log('connectType', this.data.connectType);
                                // this.reLogin();
                        }
                })
        },
});
