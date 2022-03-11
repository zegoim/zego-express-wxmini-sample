import {
        getLoginToken
} from '../../utils/server';
import {
        initSDK,
        authCheck,
        startPush,

} from '../../utils/common_zego';
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
                userID: 'xcx-userID-' + new Date().getTime(), // 用户ID,
                livePlayerList: [],
                connectType: -1, // -1为初始状态，1为连接，0断开连接
                canShow: -1,
                role: '',
                roomUserList: [],
                handupStop: false,
                mirror: true,
                num: 0,
                livePlaying: [],
                isReLoginging: false,
                pusher: {},  // live-pusher的属性，sdk进行管理
                playerList: [],  // live-player的属性列表，sdk进行管理
                zegoPlayerList: [],  // 组件列表
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
                if (e.target.dataset && e.target.dataset.role == 1) {
                        let config = {mode: "SD"};
                        if (e.target.dataset.option == "video") {
                                config.enableMic = false;
                        } else if (e.target.dataset.option == "audio") {
                                config.enableCamera = false;
                        }
                        this.setData({
                                config: config
                        })

                        // 将zg实例传递给组件。
                        const zegoPusher = this.selectComponent("#zegoPusher")
                        await zegoPusher.startPush(zg, this.data.pushStreamID, undefined, this.data.config); 
                }
                this.setData({        
                        role: e.target.dataset.role
                })
        },
        async logout() {
                try {
                        if (this.data.pusher && this.data.pusher.url) {
                                zg.getPusherInstance().stop()
                        }
                        
                        this.data.playerList && this.data.playerList.forEach(i => {
                                zg.getPlayerInstance(i.id).stop()
                        })
                        
                        this.setData({
                                zegoPlayerList: []
                        })
                        /** 登出房间 */
                        if (zg && this.data.connectType === 1) await zg.logoutRoom();
                } catch (error) {
                        console.error('error: ', error);
                }

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

        publishStream(){
                zg.getPusherInstance().start(this.data.pushStreamID);
        },
        // 停止推流
        stopPushStream() {
                zg.getPusherInstance().stop();

        },
        //停止拉流
        stopPullStream() {
                this.data.playerList && this.data.playerList.forEach(i => {
                        zg.getPlayerInstance(i.id).stop();
                })
        },
        //  //切换拉流
        async reLogin() {
                console.error("重新登录")

                if (this.data.isReLoginging) return;
                this.data.isReLoginging = true;
                try {
                        await zg.logoutRoom();
                        // this.setData({
                        //         userID: 'xcx-userID-' + new Date ().getTime ()
                        // });
                        // this.data.livePusher && (this.data.livePusher! as wx.LivePusherContext).stop();
                        let token = await getLoginToken(zegoAppID, this.data.userID);
                        if (!token) {
                                console.error("获取token 失败");
                                this.reLogin();
                                return
                        }
                        this.setData({
                                token
                        });
                        console.error('login ', this.data.userID, this.data.token, this.data.roomID, zegoAppID);
                        let isLogin = await zg.loginRoom(this.data.roomID, this.data.token, {
                                userID: this.data.userID,
                                userName: 'nick' + this.data.userID
                        });
                        isLogin ? console.log('login success') : console.error('login fail');
                        this.setData({
                                connectType: 1
                        });
                        //console.log('pushStream: ', this.data.pushStreamID, this.data.livePusherUrl, this.data.role);
                        if (this.data.role == 1) {
                                startPush(this, undefined, this.data.config)
                        }
                        this.data.isReLoginging = false;
                } catch (error) {
                        console.error('error: ', error);
                }
        },
        async onReady() {
                console.log('onReady')
                zg = initSDK(this, "pusher", "playerList");
                console.log("zg",zg);
                console.log('sdk version: ', zg.getVersion());

        },
        onShow() {
                console.log('onShow: ', this.data.handupStop, this.data.connectType, server);
                authCheck(this);
                // if (zg && (this.data.handupStop || this.data.connectType === 1)) {
                //         this.reLogin();
                // }
                // 初始化 zego-player列表
                this.setData({
                        zegoPlayerList: []
                })
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
        pausePush() {
                zg.getPusherInstance().pause({
                        success: () => {
                                console.warn(" success")
                        },
                        fail: (e) => {
                                console.warn(" fail " + e)
                        },
                        complete: () => {
                                console.warn("complete")
                        }
                })
        },
        resumePush() {
                zg.getPusherInstance().resume({
                        success: () => {
                                console.warn(" success")
                        },
                        fail: (e) => {
                                console.warn(" fail " + e)
                        },
                        complete: () => {
                                console.warn("complete")
                        }
                })
        }
});