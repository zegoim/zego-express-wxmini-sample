import {
        getLoginToken
} from '../../utils/server';
import {
        initSDK,
        authCheck,
        startPush,

} from '../../utils/common';
import {
        wxp
} from '../../app';
import {
        CalcQualityGrade

} from '../../utils/calc';
let calcQualityGradeFunc = new CalcQualityGrade();

let {
        zegoAppID,
        server
} = getApp().globalData;
// import {
//         ZegoExpressEngine
// } from '../../libs/ZegoExpressMiniProgram';
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
                role: '',
                roomUserList: [],
                handupStop: false,
                mirror: true,
                num: 0,
                livePlaying: []
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
                                /** 获取token */
                                let token = await getLoginToken(zegoAppID, this.data.userID);
                                this.setData({
                                        token
                                });
                                /** 开始登录房间 */
                                let isLogin = await zg.loginRoom(this.data.roomID, this.data.token, {
                                        userID: this.data.userID,
                                        userName: 'nick' + this.data.userID
                                }, {
                                        userUpdate: true
                                });
                                isLogin ? console.log('login success') : console.error('login fail');
                                zg.setLogConfig({
                                        logURL:'https://weblogger560224782-api.e-business.net.cn/httplog'
                                })
                                this.setData({
                                        connectType: 1
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

                console.log('onPushStateChange', e.detail.code, e.detail.message);
                if (e.detail.code === 5000) {
                        this.setData({
                                handupStop: true
                        })
                        // this.data.livePusher && (this.data.livePusher! as wx.LivePusherContext).stop();
                }
                zg.updatePlayerState(this.data.pushStreamID, e);
        },
        binddatachange(e) {
                console.log(e)
        },
        // live-pusher 绑定网络状态事件，透传网络状态事件给 SDK
        onPushNetStateChange(e) {
                zg.updatePlayerNetStatus(this.data.pushStreamID, e);
        },
        // live-player 绑定网络状态事件，透传网络状态事件给 SDK
        onPlayNetStateChange(e) {
                let netQuaily = calcQualityGradeFunc.calcNetQualityGrade(e.currentTarget.id, e.detail.info.audioBitrate, e.detail.info.videoBitrate, e.detail.info.videoFPS)
                zg.updatePlayerNetStatus(e.currentTarget.id, e);
        },
        //初始化拉流网络质量配置 一条拉流初始化一次即可
        addStreamRefer() {
                this.data.livePlayerList.forEach(item => {
                        calcQualityGradeFunc.addStreamRefer(item.streamID, 80, 15)
                })

        },
        //移除网络质量监听回调
        removeStreamRefer() {
                calcQualityGradeFunc.removeStreamRefer(this.data.livePlayerList[0].streamID);
        },
        //live-player 绑定拉流事件，透传拉流事件给 SDK
        onPlayStateChange(e) {
                zg.updatePlayerState(e.currentTarget.id, e);
        },
        // 停止推流
        stopPushStream() {
                this.data.livePusher.stop();
                this.setData({
                        livePusherUrl: ''
                });
                zg.stopPublishingStream(this.data.pushStreamID);

        },
        //停止拉流
        stopPullStream() {
                zg.stopPlayingStream(this.data.livePlayerList[0].streamID);
                this.setData({
                        livePlayerList: []
                });
        },
        //  //切换拉流
        // switchPullStream() {
        //         zg.stopPlayingStream(this.data.livePlayerList[this.data.num].streamID);
        //         console.warn(this.data)
        //         this.setData({
        //                 num:this.data.num==0?1:0,
        //                 livePlaying:[]
        //         },()=>{
        //                 this.setData({
        //                         livePlaying:this.data.livePlayerList[this.data.num]
        //                 })
        //                 // let {
        //                 //         streamID,
        //                 //         url
        //                 // } = await zg.startPlayingStream(
        //                 //         streamList[i].streamID, {
        //                 //                 sourceType: "BGP"
        //                 //         }
        //                 // );
        //         })
        // },
        async onReady() {
                console.log('onReady')
                zg = initSDK(this);
                console.log('sdk version: ', zg.getVersion());

        },

        async reLogin() {
                try {
                        await zg.logoutRoom();
                        // this.setData({
                        //         userID: 'xcx-userID-' + new Date ().getTime ()
                        // });
                        // this.data.livePusher && (this.data.livePusher! as wx.LivePusherContext).stop();
                        let token = await getLoginToken(zegoAppID, this.data.userID);
                        this.setData({
                                token
                        });
                        console.error('login ', this.data.userID, this.data.token, this.data.roomID, zegoAppID);
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
                // if (zg && (this.data.handupStop || this.data.connectType === 1)) {
                //         this.reLogin();
                // }
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
                this.onNetworkStatus()
                // zg = new ZegoExpressEngine(zegoAppID, server)
                console.error(zg);
        },
        bindaudiovolumenotify(e) {
                console.log('===========')
                console.error(e)
                console.log(new Date())
        },
        onNetworkStatus() {

                wx.onNetworkStatusChange(res => {
                        if (res.isConnected && this.data.connectType === 1 && zg) {
                                console.warn('data', this.data);
                                console.warn('roomID', this.data.roomID);
                                this.reLogin();

                        }
                })
        },
});