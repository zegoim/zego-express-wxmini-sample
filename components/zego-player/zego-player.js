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
    player: {},
    state: "NO_PLAY"
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
      zgInstance.updatePlayerState(e.currentTarget.id, e)
    },
    // live-player 绑定网络状态事件，透传网络状态事件给 SDK
    onPlayNetStateChange(e) {
      zgInstance.updatePlayerNetStatus(e.currentTarget.id, e)
    },
    /**
     * 暂停渲染
     */
    pausePlayer() {
      zgInstance.getPlayerInstance(this.data.playerId).pause();
    },
    /**
     * 恢复渲染
     */
    resumePlayer() {
      zgInstance.getPlayerInstance(this.data.playerId).resume();
    },
    /**
     * 重新拉流
     */
    rePlay() {
      return Promise(resolve => {
        zgInstance.getPlayerInstance(this.data.playerId).stop()
        console.warn("rePlay res", streamID, options);
        setTimeout(() => {
          try {
            zgInstance.getPlayerInstance(this.data.playerId).play()
            this.resumePlayer()
          } catch (error) { 
            console.warn("rePlay failed!!!", error, error + "");
          }
          resolve()
        }, 1000);
      })
    },
  }
})