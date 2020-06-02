// import { ZegoExpressEngine } from 'zego-express-engine-miniprogram';
import { ZegoExpressEngine } from './libs/ZegoExpressMiniProgram-1.5.0';
import { getLoginToken } from '../../utils/server';
import {  _checkParam } from '../../utils/common';
import { wxp } from '../../app';

let { zegoAppID, server } = getApp ().globalData;

const MAX_RETRY_COUNT = 5;
const isTest = false;
let zg;

Page ({
        data: {
                roomID: '',     // 房间ID
                token: '',      // 服务端校验token
                pushStreamID: 'xcx-streamID-' + new Date ().getTime (), // 推流ID
                livePusherUrl: '',      // 推流地址
                livePusher: null,       // live-pusher 的 Context，内部只有一个对象
                userID: 'xcx-userID-' + new Date ().getTime (), // 用户ID,
                livePlayerList: [],
                connectType: -1,  // -1为初始状态，1为连接，0断开连接
                canShow: -1,
                role: '',
                roomUserList: [],
                pushRetryCount: 0,
        },
        bindKeyInput(e) {
                this.setData ({ roomID: e.detail.value });
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
                                /** 获取token */
                                let token = await getLoginToken (zegoAppID, this.data.userID);
                                this.setData({ token });
                                /** 开始登录房间 */
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
                // if (e.target.dataset && e.target.dataset.role == 1 && this.data.livePusherUrl === '') {
                //         this.startPush(this);
                // }
                console.log('role', e.target.dataset.role)
                this.setData ({
                        role: e.target.dataset.role == 1 ? 'anchor' : 'audience'
                })
                console.log('role', this.data.role)
        },
        startPublish() {
                if (this.data.role == 'anchor' && this.data.livePusherUrl === '') {
                        this.startPush(this);
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
                        /** 登出房间 */
                        if (zg && this.data.connectType === 1) await zg.logoutRoom(this.data.roomID);
                } catch(error) {
                        console.error('error: ', error);
                }

        },
        // live-pusher 绑定推流事件，透传推流事件给 SDK
        onPushStateChange(e) {
                console.log('onPushStateChange', e.detail.code, e.detail.message);

                if (e.detail.code === -1307) {
                        if (!this.data.livePusherUrl) return;
                        this.data.pushRetryCount++;

                        // console.error('retry count', this.data.pushRetryCount, MAX_RETRY_COUNT);
                        console.error('地址 ', this.data.livePusherUrl, '连接失败');
                        if (this.data.pushRetryCount >= MAX_RETRY_COUNT) {
                                zg.updatePlayerState (this.data.pushStreamID, e);
                                // this.data.pushRetryCount = 0;
                                // console.error('push retry fail');
                                console.error('重试完全失败');
                                return;
                        }

                        const url = zg.getNextUrl(this.data.pushStreamID);
                        console.error('地址 ', url, '开始重试');

                        this.setData({
                                livePusherUrl: this.setTestUrl(url, isTest)
                        }, () => {
                                this.data.livePusher.stop();
                                this.data.livePusher.start();
                        });
                } else {
                        if (e.detail.code === 1002) {
                                this.data.pushRetryCount = 0;
                                console.error('地址 ', this.data.livePusherUrl, '连接成功');
                        }
                        zg.updatePlayerState (this.data.pushStreamID, e);
                }
        },
        // live-pusher 绑定网络状态事件，透传网络状态事件给 SDK
        onPushNetStateChange(e) {
                zg.updatePlayerNetStatus (this.data.pushStreamID, e);
        },
        // live-player 绑定网络状态事件，透传网络状态事件给 SDK
        onPlayNetStateChange(e) {
                zg.updatePlayerNetStatus (e.currentTarget.id, e);
        },
        //live-player 绑定拉流事件，透传拉流事件给 SDK
        onPlayStateChange(e) {
                console.log('onPlayStateChange', e.detail.code, e.detail.message);
                const _player = this.data.livePlayerList.find(item => item.streamID === e.currentTarget.id);
                if (!_player) {
                        console.error('no player');
                        return;
                }
                if (e.detail.code === -2301) {
                        _player.retryCount++;
                        console.error('流 ' + _player.streamID, '地址 ', _player.url, '连接失败');

                        if(_player.retryCount >= MAX_RETRY_COUNT) {
                                zg.updatePlayerState (e.currentTarget.id, e);
                                console.error('流 ' + _player.streamID, '重试完全失败');
                                return;
                        }
                        const url = zg.getNextUrl(e.currentTarget.id);
                        // console.error('play retry', url);
                        console.error('流 ' + _player.streamID, '地址 ', _player.url, '开始重试');

                        _player.url = this.setTestUrl(url, isTest);
                        this.setData({
                                livePlayerList: this.data.livePlayerList
                        }, () => {
                                _player.playerContext.stop();
                                _player.playerContext.play();
                        })
                } else {
                        if (e.detail.code === 2004) _player.retryCount = 0;
                        zg.updatePlayerState (e.currentTarget.id, e);
                }

        },
        async onReady() {
                console.log('onReady')
                zg = this.initSDK (this);
        },
        async reLogin() {
                try {
                        // await zg.logoutRoom(this.data.roomID);
                        // this.setData({
                        //         userID: 'xcx-userID-' + new Date ().getTime ()
                        // });
                        // this.data.livePusher && (this.data.livePusher! as wx.LivePusherContext).stop();
                        let token = await getLoginToken (zegoAppID, this.data.userID);
                        this.setData({ token });
                        console.error('login ', this.data.userID, this.data.token, this.data.roomID, zegoAppID);
                        let isLogin = await zg.loginRoom (this.data.roomID, this.data.token, {userID: this.data.userID, userName: 'nick' + this.data.userID});
                        isLogin ? console.log('login success') : console.error('login fail');
                        this.setData({
                                connectType: 1
                        });
                        console.log('pushStream: ', this.data.pushStreamID, this.data.livePusherUrl, this.data.role);
                        if (this.data.role === 'anchor') {
                                const { url } = await zg.startPublishingStream(this.data.pushStreamID);
                                console.log('url', this.data.livePusherUrl, url);
                                if (this.data.livePusherUrl !== url) {
                                        this.setData({
                                                livePusherUrl: url,
                                        }, () => {
                                                // (this.data.livePusher! as wx.LivePusherContext).stop();
                                                this.data.livePusher.start();
                                        });
                                }
                        }
                } catch(error) {
                        console.error('error: ', error);
                }
        },
        onShow() {
                console.log('onShow: ', this.data.handupStop, this.data.connectType, server);
                this.authCheck(this);

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
                        console.log('net', res);
                        if (res.isConnected && this.data.connectType === 0 && zg) {
                                console.log('connectType', this.data.connectType);
                                this.reLogin();
                        }
                })
        },
        initSDK(context) {
                if (!_checkParam(zegoAppID, server)) return false;
                /** 初始化SDK，userID 为用户自定义ID，全局唯一 */
                zg = new ZegoExpressEngine(zegoAppID, server);
                console.log('version', zg.getVersion());
                zg.setDebugVerbose(false);
                this.authCheck(context);
        
                // console.log(this);
                zg.on("roomStreamUpdate", (roomID, updateType, streamList) => {
                        console.log("roomStreamUpdate", roomID, updateType, streamList);
                        if (updateType === "ADD") {
                                this.playAll(streamList, context);
                        } else {
                                this.stopPlayAll(streamList, context);
                        }
                });
                // the event is triggered when one join or leave the room
                zg.on("roomUserUpdate", (roomID, updateType, userList) => {
                        console.log(
                                "roomID: ",
                                roomID,
                                " updateType: ",
                                updateType === "ADD" ? "join" : "leave",
                                " userList: ",
                                userList
                        );
                        let roomUserList = context.data.roomUserList;
                        if (updateType === "DELETE") {
                                userList.forEach((user) => {
                                        const i = roomUserList.findIndex((item) => item.userID === user.userID);
                                        roomUserList.splice(i, 1);
                                });
                        } else if (updateType === "ADD") {
                                userList.forEach((user) => {
                                        if (user.userID !== context.data.userID) {
                                                roomUserList.push(...userList);
                                        }
                                });
                        }
                        context.setData({
                                roomUserList,
                        });
                });
                zg.on("roomStateUpdate", (roomID, state, errorCode, extendedData) => {
                        console.log("roomStateUpdate", roomID, state, errorCode, extendedData);
                        if (state === "DISCONNECTED") {
                                context.setData({
                                        connectType: 0,
                                });
                        }
                });
                zg.on("publisherStateUpdate", (result) => {
                        console.log("publishStateUpdate", result);
                        if (result.state === 'NO_PUBLISH') {
                                console.error('推流失败');
                        }
                });
                zg.on("playerStateUpdate", (result) => {
                        console.log("playStateUpdate", result);
                });
                zg.on("publishQualityUpdate", (streamID, publishStats) => {
                        console.log("publishQualityUpdate", streamID, publishStats);
                });
                zg.on("playQualityUpdate", (streamID, playStats) => {
                        console.log("playQualityUpdate", streamID, playStats);
                });
                return zg;
        },
        
        async playAll(streamList, context) {
                console.log("streamList", streamList);
                if (streamList.length === 0) {
                        console.log("startPlayingStream, streamList is null");
                        return;
                }
        
                // 获取每个 streamId 对应的拉流 url
                for (let i = 0; i < streamList.length; i++) {
                        /** 开始拉流，返回拉流地址 */
                        try {
                                let { streamID, url } = await zg.startPlayingStream(
                                        streamList[i].streamID,
                                        { sourceType: "BGP" }
                                );
                                console.log("streamID", streamID, url);
                                this.setPlayUrl(streamID, url, context);
                        } catch (error) {
                                console.error("error", error);
                        }
                }
        },
        
        async startPush(context) {
                try {
                        /** 开始推流，返回推流地址 */
                        const { url } = await zg.startPublishingStream(context.data.pushStreamID);
                        // const res = await zg.startPublishingStream(context.data.pushStreamID);
                        console.log('>>> startPush', url);
                        context.setData(
                                {
                                        livePusherUrl: this.setTestUrl(url, isTest),
                                        livePusher: wx.createLivePusherContext(),
                                },
                                () => {
                                        console.error('地址 ', url, '开始连接');

                                        context.data.livePusher.start();
                                }
                        );
                } catch (error) {
                        console.error("error", error);
                }
        },
        
        setPlayUrl(streamID, url, context) {
                if (!url) {
                        console.log(">>>[liveroom-room] setPlayUrl, url is null");
                        return;
                }
                console.log("setPlayUrl", streamID, url);
                for (let i = 0; i < context.data.livePlayerList.length; i++) {
                        if (
                                context.data.livePlayerList[i]["streamID"] === streamID &&
                                context.data.livePlayerList[i]["url"] === url
                        ) {
                                console.log(
                                        ">>>[liveroom-room] setPlayUrl, streamID and url are repeated"
                                );
                                return;
                        }
                }
        
                let streamInfo = { streamID: "", url: "" };
                let isStreamRepeated = false;
        
                // 相同 streamID 的源已存在，更新 Url
                for (let i = 0; i < context.data.livePlayerList.length; i++) {
                        if (context.data.livePlayerList[i]["streamID"] === streamID) {
                                isStreamRepeated = true;
                                context.data.livePlayerList[i]["url"] = url;
                                break;
                        }
                }
        
                // 相同 streamID 的源不存在，创建新 player
                if (!isStreamRepeated) {
                        streamInfo["streamID"] = streamID;
                        streamInfo["url"] = this.setTestUrl(url, isTest);
                        streamInfo["retryCount"] = 0;
                        streamInfo["playerContext"] = wx.createLivePlayerContext(streamID);
                        context.data.livePlayerList.push(streamInfo);
                }
        
                context.setData({
                        livePlayerList: context.data.livePlayerList,
                });
        },
        
        stopPlayAll(streamList, context) {
                if (streamList.length === 0) {
                        console.log("stopPlayAll, streamList is empty");
                        return;
                }
                let playStreamList = context.data.livePlayerList;
                for (let i = 0; i < streamList.length; i++) {
                        let streamID = streamList[i].streamID;
                        zg.stopPlayingStream(streamID);
                        // 把远程被删除的流从播放的流列表中删除
                        for (let j = 0; j < playStreamList.length; j++) {
                                if (playStreamList[j]["streamID"] === streamID) {
                                        playStreamList.splice(j, 1);
                                        break;
                                }
                        }
                }
                context.setData({ livePlayerList: playStreamList });
        },

        async authCheck(context) {
                if (!zg) return;
                const result = await zg.checkSystemRequirements();
                console.log("checkSystemRequirements", result);
                if (result.code === 10001) {
                        console.log("result ", result.code);
                        wxp.showModal({
                                title: "提示",
                                content: "当前微信版本过低，无法使用该功能，请升级到最新微信版本后再试。",
                                showCancel: false,
                        });
                        context.setData({
                                canShow: 0,
                        });
                } else if (result.code === 10002) {
                        console.log("result ", result.code);
                        let hasCamera = false;
                        let hasRecord = false;
                        wxp.authorize({
                                scope: "scope.camera",
                                success() {
                                        hasCamera = true;
                                        context.setData({
                                                canShow: hasRecord ? 1 : 0,
                                        });
                                },
                                fail() {
                                        hasCamera = false;
                                        context.setData({
                                                canShow: 0,
                                        });
                                },
                        });
        
                        wxp.authorize({
                                scope: "scope.record",
                                success() {
                                        hasRecord = true;
                                        context.setData({
                                                canShow: hasCamera ? 1 : 0,
                                        });
                                },
                                fail() {
                                        hasRecord = false;
                                        context.setData({
                                                canShow: 0,
                                        });
                                },
                        });
                } else {
                        context.setData({
                                canShow: 1,
                        });
                }
        },

        setTestUrl(url, test) {
                if (test) {
                        return url.replace('demo', 'dmo');
                }
                return url;
        }
});