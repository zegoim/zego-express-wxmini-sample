import {
  getTokenAndUserID
} from '../../utils/server';
import {
        initSDK,
        authCheck,
        destroySDK
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

let zg;


Page({
        data: {
                roomID: '', // 房间ID
                token: '', // 服务端校验token
                pushStreamID: 'xcx-streamID-' + new Date().getTime(), // 推流ID
                userID: '', // 用户ID,
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
                pusher: {}, // live-pusher的属性，sdk进行管理
                playerList: [], // live-player的属性列表，sdk进行管理
                zegoPlayerList: [], // 组件列表
                isRecovering: false,
                volume: 10,
                showExitFullScreen: false,
                snapshotUrl: '',
                isPlayBGM: false,
                wxObject: {
                  success(data) {
                          console.info('success: ', data)
                  },
                  fail(err) {
                          console.error(err)
                  },
                  complete(data) {
                          console.warn('complete:', data)
                  }
                }
             
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
                        let config = {
                                mode: "RTC"
                        };
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
                                const zegoPusher = this.selectComponent("#zegoPusher")
                                zegoPusher.stopPush()
                        }

                        this.data.playerList && this.data.playerList.forEach(i => {
                                zg.getPlayerInstance(i.id).stop()
                        })
                      
                        this.setData({
                                zegoPlayerList: [],
                                isPlayBGM: false
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

        // 停止推流
        stopPushStream() {
                this.stopPreview()
                const zegoPusher = this.selectComponent("#zegoPusher")
                zegoPusher.stopPush()
                this.setData({
                        isPlayBGM: false
                })

        },
        //停止拉流
        stopPullStream() {
                this.data.zegoPlayerList.forEach(zegoPlayerAttr=>{
                        const zegoPlayer = this.selectComponent(`#${zegoPlayerAttr.componentID}`)
                        zegoPlayer.stopPlay();
                })
        },
        //  //切换拉流
        async reLogin() {
                console.error("重新登录")

                if (this.data.isReLoginging) return;
                this.data.isReLoginging = true;
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
                                connectType: 1
                        });
                        //console.log('pushStream: ', this.data.pushStreamID, this.data.livePusherUrl, this.data.role);
                        // if (this.data.role == 1) {
                        //         startPush(this, undefined, this.data.config)
                        // }
                        this.data.isReLoginging = false;
                } catch (error) {
                        console.error('error: ', error);
                }
        },
        async onReady() {
                console.log('onReady')
                zg = initSDK(this, "pusher", "playerList");
                if (zg) {
                  console.log('sdk version: ', zg.getVersion());
                }
        },
        onShow() {
                console.warn('onShow: ', this.data.handupStop, this.data.connectType, server);
                authCheck(this);
                // 刷新全局变量
                zegoAppID = getApp().globalData.zegoAppID;
                server = getApp().globalData.server;
                // console.error(this.data.pusher)
        },
        onHide() {
                console.warn("onHide")
                // this.logout();
        },
        onUnload() {
                console.warn("onUnload 进行登出")
                this.logout();
                wx.offNetworkStatusChange()
                wx.offAudioInterruptionBegin(this.audioInterruptBegin)
                wx.offAudioInterruptionEnd(this.audioInterruptEnd)
                destroySDK();
        },
        onLoad() {
                // 监听网络状态
                this.onNetworkStatus()
                // 监听声音中断恢复事件，将每个拉流组件进行强制恢复播放
                wx.onAudioInterruptionBegin(this.audioInterruptBegin)
                wx.onAudioInterruptionEnd(this.audioInterruptEnd)
        },
        getPlatform() {
          const sys = wx.getSystemInfoSync();
          const arr = sys.system.split(" ")
          const versionStr = arr[1]
          let majorVersion
          if(versionStr?.includes(".")) {
            majorVersion = parseInt(versionStr.split(".")[0])
          }
          return {
            platform: sys.platform,
            majorVersion
          }
        },
        onNetworkStatus() {
                const sys = wx.getSystemInfoSync();
                let i = 0, timer;
                if (sys.platform === 'ios') {
                        wx.onNetworkStatusChange(res => {
                                console.warn("网络变化", res.isConnected, res.networkType, this.data.connectType, zg, new Date())
                                if (res.isConnected && this.data.isPlayBGM) {
                                        // const timer = setTimeout(()=>{
                                        //         clearTimeout(timer)
                                        //         zg.getPusherInstance() && this.playBGM();
                                        // },200)
                                }
                                if (res.isConnected && this.data.connectType === 1 && zg) {
                                        console.warn('data', this.data);
                                        console.warn('roomID', this.data.roomID);
                                        timer = setTimeout(() => {
                                                clearTimeout(timer)
                                                console.warn('connectType', this.data.connectType)
                                                this.forceRecoverPushAndPlay()
                                        }, 3000 * i)
                                        i = 1
                                } else {
                                        i = 0;
                                }
                        })
                }
        },
        audioInterruptBegin() {
                console.warn("开始中断播放")
        },

        audioInterruptEnd() {
                console.warn("结束中断播放")
                this.forceRecoverPushAndPlay()
        },
        /**
         * 恢复推拉流
         * 在房间状态重连时进行调用
         */
        forceRecoverPushAndPlay(rePush = false) {
                console.warn("forceRecoverPushAndPlay", rePush)
                if(this.data.connectType !== 1) {
                        console.warn("未登录房间")
                        return
                }
                if(this.data.isRecovering === true) {
                        console.warn("正在恢复推拉流")
                        return
                }
                this.setData({
                        isRecovering: true
                })
                // 获取推流组件，进行重新推流
                const zegoPusher = this.selectComponent("#zegoPusher")
                console.warn('是否需要恢复推流', zegoPusher, rePush, zegoPusher?.data.state);
                const promiseList = []
                if (zegoPusher && (rePush || ["NO_PUBLISH", "PUBLISH_REQUESTING"].includes(zegoPusher.data.state))) {
                    console.warn(' 重新推流', this.data.pushStreamID);
                    promiseList.push(zegoPusher.rePush())
                } else {
                    const {platform, majorVersion} = this.getPlatform()
                    // 兼容 iphone12 iOS 17.3.1 微信8.0.49，使用QQ视频后无法恢复音视频采集进行推流
                    if(platform === "ios" && majorVersion === 17) {
                        console.warn('不重新推流，进行暂停和恢复摄像头麦克风采集',platform , majorVersion);
                        this.pausePush()
                        this.resumePush()
                    }
                }
                this.data.zegoPlayerList.forEach(item => {
                        // 获取拉流组件，进行重新拉流
                        const zegoPlayer = this.selectComponent(`#${item.componentID}`)
                        console.warn('是否需要恢复拉流', item.playerId, zegoPlayer?.data.state);
                        if (zegoPlayer && ["NO_PLAY", "PLAY_REQUESTING"].includes(zegoPlayer.data.state)) {
                                console.warn('重新拉流', item.playerId);
                                promiseList.push(zegoPlayer.rePlay())
                        } else if (zegoPlayer) {
                                // 恢复渲染
                                zegoPlayer.resumePlayer();
                                zg.mutePlayStreamAudio(item.playerId, true)
                                zg.mutePlayStreamAudio(item.playerId, false)
                                console.warn('恢复拉流渲染', item.playerId);
                        }
                })
                const cb = ()=>{
                        console.warn("forceRecoverPushAndPlay 结束")
                        this.setData({
                                isRecovering: false
                        })
                }
                Promise.all(promiseList).then(cb).catch((err) => {
                        console.warn("forceRecoverPushAndPlay error",err)
                        cb()
                })
        },
        createPusher() {
                zg.createPusher()
        },
        startPreview() {
                zg.getPusherInstance().startPreview(this.data.wxObject)
        },
        stopPreview() {
                zg.getPusherInstance().stopPreview(this.data.wxObject)
        },
        pausePush() {
                zg.getPusherInstance().pause(this.data.wxObject)
        },
        resumePush() {
                zg.getPusherInstance().resume(this.data.wxObject)
        },

        onPusherEvent(data) {
                console.log(`onPusherEvent`, data)
                const { name, event } = data.detail
                switch (name) {
                        case 'statusChange':
                                const platform = wx.getSystemInfoSync().platform;
                                if (platform === 'android') {
                                        wx.showModal({
                                                title: "异常提示",
                                                content: "推流被外部停止，是否重新推流",
                                                showCancel: true,
                                                success: ()=>{
                                                        this.forceRecoverPushAndPlay()
                                                },
                                        })
                                }
                                break;
                        default:
                                break;
                }
                        
        },
        volumeChange(data) {
                this.setData({
                        volume: data.detail.value
                })
        },
        playBGM() {
                this.setData({
                        isPlayBGM: true
                })
                zg.getPusherInstance().playBGM({
                        url: "https://zego-public.oss-cn-shanghai.aliyuncs.com/sdk-doc/assets/bike.mp3",
                        ...this.data.wxObject
                })
        },
        pauseBGM() {
                this.setData({
                        isPlayBGM: false
                })
                zg.getPusherInstance().pauseBGM(this.data.wxObject)
        },
        resumeBGM() {
                this.setData({
                        isPlayBGM: true
                })
                zg.getPusherInstance().resumeBGM(this.data.wxObject)
        },
        stopBGM() {
                this.setData({
                        isPlayBGM: false
                })
                zg.getPusherInstance().stopBGM(this.data.wxObject)
        },
        setBGMVolume() {
                const volume =  this.data.volume/10
                if(!/^(0(.\d+)?|1(\.0+)?)$/.test(volume)) return alert('音量值只能为0-1.0之间的值')
                zg.getPusherInstance().setBGMVolume({
                        volume: this.data.volume/10,
                        ...this.data.wxObject
                })
        },
        setMICVolume() {
                const volume =  this.data.volume/10
                if(!/^(0(.\d+)?|1(\.0+)?)$/.test(volume)) return alert('音量值只能为0-1.0之间的值')
                zg.getPusherInstance().setMICVolume({
                        volume,
                        ...this.data.wxObject
                })
        },
        switchCamera() {
                zg.getPusherInstance().switchCamera(this.data.wxObject)
        },
        toggleTorch() {
                zg.getPusherInstance().toggleTorch(this.data.wxObject);
        },
        snapshotPush() {
                const _this = this
                zg.getPusherInstance().snapshot({
                        quality: "raw",
                        ...this.data.wxObject,
                        success(data) {
                                _this.setData({
                                        snapshotUrl: data.tempImagePath
                                })
                        }
                });
        },
        pauseAllPlayers() {
                this.data.zegoPlayerList.forEach(zegoPlayerAttr=>{
                        const zegoPlayer = this.selectComponent(`#${zegoPlayerAttr.componentID}`)
                        zegoPlayer.pausePlayer();
                })
        },
        resumeAllPlayers() {
                this.data.zegoPlayerList.forEach(zegoPlayerAttr=>{
                        const zegoPlayer = this.selectComponent(`#${zegoPlayerAttr.componentID}`)
                        zegoPlayer.resumePlayer();
                })
        },
        mutePlayStreamAudio() {
                this.data.playerList && this.data.playerList.forEach(i => {
                        zg.getPlayerInstance(i.id).mute(this.data.wxObject);
                })
        },
        // 第一个拉流窗口全屏
        requestFullScreen() {
                if(!this.data.playerList[0]) return
                const _this = this;
                zg.getPlayerInstance(this.data.playerList[0].id).requestFullScreen({
                        success(){
                                const zegoPlayer = _this.selectComponent(`#${_this.data.zegoPlayerList[0].componentID}`)
                                zegoPlayer.setData({
                                        showExitFullScreen: true
                                })
                        },
                        complete(data) {
                                console.warn('requestFullScreen complete:', data)
                        }
                });
        },
        snapshotPull() {
                if(!this.data.playerList[0]) return
                const _this = this;
                zg.getPlayerInstance(this.data.playerList[0].id).snapshot({
                        quality: "raw",
                        ...this.data.wxObject,
                        success(data) {
                                _this.setData({
                                        snapshotUrl: data.tempImagePath
                                })
                        }
                });
        }
        
});