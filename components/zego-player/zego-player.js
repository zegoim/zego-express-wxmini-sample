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
    state: "NO_PLAY",
    streamID: '',
    showExitFullScreen: false
  },
  /**
   * 组件的方法列表
   */
  methods: {
    async startPlay(instance, streamID) {
      try {
        if(!instance) {
          console.warn("instance 不存在", streamID)
          return 
        }
        // 获取页面上的zego实例
        zgInstance = instance
        // 等待 getPlayerInstance 创建 live-player 的上下文后，将组件内的this绑定到 player的上下文上。
        const res = await zgInstance.getPlayerInstance(streamID, this).play()
        console.warn("初次拉流开始", streamID, res)
      } catch (error) {
        console.warn("初次拉流失败 ", streamID, error)
      }
    },
    //live-player 绑定拉流事件，透传拉流事件给 SDK
    onPlayStateChange(e) {
      // console.warn("onPlayStateChange", e.currentTarget.id, e.detail.code, e.detail.message)
      zgInstance.updatePlayerState(e.currentTarget.id, e)
    },
    // live-player 绑定网络状态事件，透传网络状态事件给 SDK
    onPlayNetStateChange(e) {
      // console.info('onPushNetStateChange', e.currentTarget.id, e.detail.code)
      zgInstance.updatePlayerNetStatus(e.currentTarget.id, e)
    },

    /**
     * 停止拉流
     */
    stopPlayer() {
      zgInstance.getPlayerInstance(this.data.playerId, this).stop();
    },
    /**
     * 暂停渲染
     */
    pausePlayer() {
      zgInstance.getPlayerInstance(this.data.playerId, this).pause();
    },
    /**
     * 恢复渲染
     */
    resumePlayer() {
      zgInstance.getPlayerInstance(this.data.playerId, this).resume();
    },
    // 退出全屏
    exitFullScreen() {
      if(!this.data.playerList[0]) return
      const _this = this;
      zgInstance.getPlayerInstance(this.data.playerId).exitFullScreen({
        success(){
          _this.setData({
            showExitFullScreen: false
          })
        }
      });
  },
    /**
     * 重新拉流
     */
    rePlay() {
      return new Promise(resolve => {
        const playInstance = zgInstance.getPlayerInstance(this.data.playerId, this);
        console.warn('rePlay', playInstance)
        playInstance.stop()
        setTimeout(async () => {
          try {
            await zgInstance.getPlayerInstance(this.data.playerId, this).play()
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