
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
        console.log("startPush res", res);
      } catch (error) {
        console.error("error in startPush", error)
      }
    },
    onPushStateChange(e) {
      zgInstance.updatePlayerState(this.data.pusher.id, e)
    },
    // live-pusher 绑定网络状态事件，透传网络状态事件给 SDK
    onPushNetStateChange(e) {
      zgInstance.updatePlayerNetStatus(this.data.pusher.id, e)
    },
    // live-pusher 音量监听，
    bindaudiovolumenotify(e) {
      zgInstance.updateAudioVolumeNotify(this.data.pusher.id, e)
    },
    onPushError(e) {
      console.log("onPushError e", e)
    }
  }
})