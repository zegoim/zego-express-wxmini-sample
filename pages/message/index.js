
import { wxp } from '../../app';
import { getLoginToken } from '../../utils/server';
import { format } from '../../utils/util';
import { initSDK, authCheck, startPush } from '../../utils/common';

let { zegoAppID, server } = getApp().globalData;
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
                scrollToView: "",
                messageList: [],
                inputMessage: "",
                roomUserList: []
        },
        async bindCallback() {
                zg.on('playerStateUpdate', (result) => {
                        console.log('playStateUpdate', result);
                });
                zg.on('publisherStateUpdate', (result) => {
                        console.log('publishStateChange', result);
                });
                zg.on('IMRecvBroadcastMessage', (roomID, chatData) => {
                        console.log('IMRecvBroadcastMessage', roomID, chatData);
                        let message = {
                                ID: 'zego' + chatData[0].fromUser.userID + chatData[0].sendTime,
                                name: chatData[0].fromUser.userName,
                                // @ts-ignore
                                time: format(chatData[0].sendTime),
                                content: chatData[0].message + '(广播发送)'
                        }
                        this.setData({
                                messageList: [...this.data.messageList, message],
                                scrollToView: message.ID,
                        });
                });
                zg.on('IMRecvCustomCommand', (roomID, fromUser, command) => {
                        console.log('IMRecvCustomCommand', roomID, fromUser, command);
                        let message = {
                                ID: fromUser.userID,
                                name: fromUser.userName,
                                time: format(new Date().getTime()),
                                content: command + '(自定义发送)'
                        }
                        this.setData({
                                messageList: [...this.data.messageList, message],
                                scrollToView: message.ID,
                        });
                });
                zg.on('IMRecvBarrageMessage', (roomID, chatData) => {
                        console.log('IMRecvBroadcastMessage', roomID, chatData);
                        let message = {
                                ID: 'zego' + chatData[0].fromUser.userID + chatData[0].sendTime,
                                name: chatData[0].fromUser.userName,
                                // @ts-ignore
                                time: format(chatData[0].sendTime),
                                content: chatData[0].message + '(弹幕发送)'
                        }
                        this.setData({
                                messageList: [...this.data.messageList, message],
                                scrollToView: message.ID,
                        });
                });
                zg.on('streamExtraInfoUpdate', (roomID, streamList) => {
                        console.log('streamExtraInfoUpdate', roomID, streamList);
                        let _content = '';
                        streamList.forEach(item => {
                                _content += `${item.user.userID} set stream ${item.streamID} extraInfo ${item.extraInfo} \n`;
                        })
                        wx.showModal({
                                title: '流附加消息',
                                content: _content,
                                showCancel: false,
                        })
                });
                zg.on("roomStateUpdate", (roomID, state, errorCode, extendedData) => {
                        console.log("roomStateUpdate", roomID, state, errorCode, extendedData);
                        if (state === "DISCONNECTED") {
                                startPush(this);
                        }

                });
        },
        bindKeyInput(e) {
                this.setData({
                        roomID: e.detail.value,
                })
        },
        bindMessageInput(e) {
                this.setData({
                        inputMessage: e.detail.value
                })
        },
        async sendMsg() {
                let message = {
                        ID: this.data.userID + new Date().getTime(),
                        name: this.data.userID,
                        // @ts-ignore
                        time: new Date().format("hh:mm:ss"),
                        content: this.data.inputMessage,
                };
                console.log('>>> currentMessage', this.data.inputMessage);
                this.setData({
                        messageList: [...this.data.messageList, message],
                        scrollToView: message.ID,
                });
                try {
                        const isSent = await zg.sendBroadcastMessage(this.data.roomID, this.data.inputMessage)
                        console.log('>>> sendMsg success, ', isSent);
                } catch (error) {
                        console.log('>>> sendMsg, error: ', error);
                };
        },
        async sendBarrageMsg() {
                let message = {
                        ID: this.data.userID + new Date().getTime(),
                        name: this.data.userID,
                        // @ts-ignore
                        time: new Date().format("hh:mm:ss"),
                        content: this.data.inputMessage,
                };
                console.log('>>> barrageMessage', this.data.inputMessage);
                this.setData({
                        messageList: [...this.data.messageList, message],
                        scrollToView: message.ID,
                });
                try {
                        const isSent = await zg.sendBarrageMessage(this.data.roomID, this.data.inputMessage)
                        console.log('>>> barrageMessage success, ', isSent);
                } catch (error) {
                        console.log('>>> barrageMessage, error: ', error);
                };
        },
        updateStreamExtra() {
                zg.setStreamExtraInfo(this.data.pushStreamID, 'setStreamExtraInfo test, send at ' + new Date().toLocaleString())
        },
        setRoomExtraInfo() {
                zg.setRoomExtraInfo(this.data.pushStreamID, '2', 'ReliableMessage test002')
        },
        async sendCustomCommand() {
                console.log(this.data.roomUserList);
                const toUserList = this.data.roomUserList.map(item => {
                        return item.userID
                });
                try {
                        const res = await zg.sendCustomCommand(this.data.roomID, this.data.inputMessage, toUserList);
                        console.warn('send custom success ' + res)
                } catch (error) {
                        console.error(JSON.stringify(error))
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
                if (this.data.connectType !== 1) {
                        try {
                                let token = await getLoginToken(zegoAppID, this.data.userID);
                                this.setData({ token });
                                let isLogin = await zg.loginRoom(this.data.roomID, this.data.token, { userID: this.data.userID, userName: 'nick' + this.data.userID }, { userUpdate: true });;
                                isLogin ? console.log('login success') : console.error('login fail');
                                console.log('zg.socketCenter.websocket')
                                console.log(zg.socketCenter.websocket)
                                console.log(zg.socketCenter.websocket.readyState)
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
                zg = initSDK(this);
                zg && this.bindCallback();
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
                                const { url } = await zg.startPublishingStream(this.data.pushStreamID);
                                console.log('url', this.data.livePusherUrl, url);
                                if (this.data.livePusherUrl !== url) {
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
