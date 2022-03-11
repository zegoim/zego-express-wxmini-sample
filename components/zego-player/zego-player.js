let zgInstance
// components/zego-player/zego-player.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    playerList: {
      type: Object,
      value: {}
    },
    playerId: {
      type: String,
      value: ""
    }
  },
  observers: {
    playerList: function (playerList) {
      // 过滤出列表中属于当前组件的 live-player

      const player = playerList.find((item) => item.id === this.data.playerId)

      if (player) {
        this.setData({
          player
        })
      }
    }
  },
  data: {
    player: {}
  },
  /**
   * 组件的方法列表
   */
  methods: {
    async startPlay(instance, streamID) {
      try {
        // 获取页面上的zego实例
        zgInstance = instance
        // 等待 getPlayerInstance 创建 live-player的上下文后，将组件内的this绑定到 player的上下文上。
        const res = (await zgInstance.getPlayerInstance(streamID)).play()
        console.log("startPlay res", res)
      } catch (error) {
        console.error("error in startPlay ", error)
      }
    },
    //live-player 绑定拉流事件，透传拉流事件给 SDK
    onPlayStateChange(e) {
      console.log("mytag e.currentTarget.id, e", e.currentTarget.id, e)
      zgInstance.updatePlayerState(e.currentTarget.id, e)
    },
    // live-player 绑定网络状态事件，透传网络状态事件给 SDK
    onPlayNetStateChange(e) {
      console.log("mytag e.currentTarget.id, e", e.currentTarget.id, e)
      zgInstance.updatePlayerNetStatus(e.currentTarget.id, e)
    }
  }
})
