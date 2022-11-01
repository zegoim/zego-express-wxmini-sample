// components/zegoPusher.js
let zgInstance
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    pusher: {
      type: Object,
      value: {},
      observer: function (newVal, oldVal) {
        // 属性值变化时执行
      }
    }
  },
  data: {
    state: "NO_PUBLISH",
    streamID: "",
    options: {}
  },
  /**
   * 组件的初始数据
   */
  methods: {
    async startPush(instance, pushStreamID, publishOption, config) {
      try {
        // 获取页面上的zego实例
        zgInstance = instance
        // 创建 pusher
        zgInstance.createPusher()
        // 设置属性
        zgInstance.zegoWechatMini.setPusherAttributes(config)
        // 开始推流
        const res = (await zgInstance.getPusherInstance()).start(pushStreamID, publishOption)
        console.log("startPush res", res, publishOption);
        this.setData({
          streamID: pushStreamID,
          options: publishOption || {}
        })
      } catch (error) {
        console.error("error in startPush", error)
      }
    },
    onPushStateChange(e) {
      // console.warn('onPushStateChange', this.data.pusher.id, e.detail.code)
      zgInstance.updatePlayerState(this.data.pusher.id, e)

      /**
       * 电话接入终止推流
       * https://developers.weixin.qq.com/community/develop/doc/00084e597a4670609b7de188756000?highLine=5001
       */
      const {code} = e.detail
      if(code === 5001) {
        console.warn("推流被停止 5001")
        this.setData({
          state: "NO_PUBLISH"
        })
        this.triggerEvent('pusherEvent', { name: 'statusChange', code })
      } else if (code === -1307) {
        // 兼容部分android机型在断网后重推可能出现推流失败的情况
        const platform = wx.getSystemInfoSync().platform;
        if (platform === 'android') {
          zgInstance.getPusherInstance().stop()
        }
      }
    },
    // live-pusher 绑定网络状态事件，透传网络状态事件给 SDK
    onPushNetStateChange(e) {
      // console.warn('onPushNetStateChange', this.data.pusher.id, e.detail.info)
      zgInstance.updatePlayerNetStatus(this.data.pusher.id, e)
    },
    // live-pusher 音量监听，
    bindaudiovolumenotify(e) {
      zgInstance.updateAudioVolumeNotify(this.data.pusher.id, e)
    },
    onPushError(e) {
      console.log("onPushError e", e)
    },
    /**
     * 重新推流
     * @param {*} 
     */
    rePush() {
      return new Promise((resolve) => {
        const {
          streamID,
          options
        } = this.data
        zgInstance.getPusherInstance().stop()
        // 延迟1s确保停推完成再重新推流
        setTimeout(async () => {
          console.warn('rePush', streamID, options, this.data.state)
          try {
            await zgInstance.getPusherInstance().start(streamID, options)
            // this.pausePlayer();
            this.resumePlayer()
            console.warn("rePush res", streamID, options);
          } catch (error) {
            console.warn("rePush failed!!!", error, error + "");
            const platform = wx.getSystemInfoSync().platform;
            if (platform === 'android') {
              // 小米手机切换网络重新推流，可能出现自动重推失败。
              wx.showModal({
                title: "异常提示",
                content: "检测到推流异常，是否重新推流",
                showCancel: true,
                success: ()=>{
                  this.rePush()
                },
              })
            }
          }
          resolve()
        }, 1000);
      })
    },
    /**
     * 恢复渲染
     */
    resumePlayer() {
      zgInstance.getPusherInstance(this.data.playerId).resume();
    },
  }
})