// components/zegoPusher.js
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
    state:"NO_PUBLISH",
    streamID: "",
    options: {}
  },
  /**
   * 组件的初始数据
   */
  methods: {
    setZgInstance(zgInstance) {
      this.zgInstance = zgInstance
    },
    /**
     * 开始推流
     * @param {Object} instance - ZEGO SDK 实例
     * @param {String} pushStreamID - 推流ID
     * @param {Object} publishOption - 推流配置项
     * @param {Object} config - 推流器属性配置
     * @returns {Promise} 推流结果
     */
    async startPush(zgInstance, pushStreamID, publishOption, config) {
      try {
        // 获取页面上的zego实例
        this.zgInstance = zgInstance
        // 创建 pusher
        const zegoPusher = this.zegoPusher = zgInstance.getPusherInstance() ?? zgInstance.createPusher()

        // 设置属性
        zgInstance.setPusherAttributes(config)
        // 开始推流
        const res = await zegoPusher.start(pushStreamID, publishOption)
        console.log("startPush res", res, publishOption);
        this.setData({
          streamID: pushStreamID,
          options: publishOption || {}
        })
      } catch (error) {
        console.error("error in startPush", error)
      }
    },
    stopPush() {
      if(this.zegoPusher){
        this.zegoPusher.stop()
        this.zegoPusher = undefined
      }
    },
    onPushStateChange(e) {
      // console.warn('onPushStateChange', this.data.pusher.id, e.detail.code)
      this.zgInstance?.updatePlayerState(this.data.pusher.id, e)

      /**
       * 电话接入终止推流
       * https://developers.weixin.qq.com/community/develop/doc/00084e597a4670609b7de188756000?highLine=5001
       */
      const {code} = e.detail
      /**
      * 5001 系统电话打断或者微信音视频电话打断
      */
      if(code === 5001) {
        console.warn("推流被停止 " + code)
        this.setData({
          state: "NO_PUBLISH"
        })
        this.triggerEvent('pusherEvent', { name: 'statusChange', code })
      } else if (code === -1307) {
        // 兼容部分android机型在断网后重推可能出现推流失败的情况
        const platform = wx.getSystemInfoSync().platform;
        if (platform === 'android') {
          this.zegoPusher?.stop()
        }
      }
    },
    // live-pusher 绑定网络状态事件，透传网络状态事件给 SDK
    onPushNetStateChange(e) {
      console.warn('onPushNetStateChange', this.data.pusher.id, e.detail.info)
      this.zgInstance?.updatePlayerNetStatus(this.data.pusher.id, e)
    },
    // live-pusher 音量监听，
    bindaudiovolumenotify(e) {
      this.zgInstance?.updateAudioVolumeNotify(this.data.pusher.id, e)
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
        this.zegoPusher?.stop()
        // 延迟1s确保停推完成再重新推流
        setTimeout(async () => {
          console.warn('rePush', streamID, options)
          try {
            await this.zegoPusher?.start(streamID, options)
            this.resumePusher()
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
    resumePusher() {
      this.zegoPusher?.resume();
    },
  }
})