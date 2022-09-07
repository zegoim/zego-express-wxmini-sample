// import { ZegoExpressEngine } from "zego-express-engine-miniprogram";
import {
  ZegoExpressEngine
} from "../libs/ZegoExpressMiniProgram"

import {
  wxp
} from "../app.js"
const app = getApp()

let zg

export const initSDK = (context, pushAtr, playAtr) => {
  if (!_checkParam(app.globalData.zegoAppID, app.globalData.server)) return false
  /** 初始化SDK，userID 为用户自定义ID，全局唯一 */
  zg = new ZegoExpressEngine(app.globalData.zegoAppID, app.globalData.server)
  // zg.setLogConfig({
  //   logLevel: "disable"
  // });
  console.log("version", zg.getVersion())
  zg.setDebugVerbose(false)
  authCheck(context)

  zg.initContext({
    wxContext: context,
    pushAtr,
    playAtr
  })

  // console.log(this);
  zg.on("roomStreamUpdate", async (roomID, updateType, streamList) => {
    console.warn("roomStreamUpdate", roomID, updateType, streamList);
    if (updateType === "ADD") {
      for (let i = 0; i < streamList.length; i++) {
        try {
          // 设置 zego-player 组件属性
          const zegoPlayerAttr = {
            componentID: `zego-${streamList[i].streamID}`,
            playerId: streamList[i].streamID
          }
          // 添加到组件列表中
          context.data.zegoPlayerList.push(zegoPlayerAttr)
          // 更新，并渲染组件列表
          context.setData({
            zegoPlayerList: context.data.zegoPlayerList
          })
          // 在zegoPlayerList更新后， 将zg实例传入对应的流id的组件内
          const zegoPlayer = context.selectComponent(`#${zegoPlayerAttr.componentID}`)
          if (!zegoPlayer) return console.warn("未能获取到组件节点", streamList[i].streamID)
          // 开始播放
          console.warn("开始拉流", roomID, streamList[i].streamID);
          await zegoPlayer.startPlay(zg, streamList[i].streamID)
        } catch (error) {
          console.error("拉流出错，等待房间重连恢复", error)
        }
      }
    } else {
      streamList.forEach((streamItem) => {
        zg.getPlayerInstance(streamItem.streamID).stop()
        // 流停止，并且移除对应的组件
        context.data.zegoPlayerList = context.data.zegoPlayerList.filter(
          (comItem) => streamItem.streamID !== comItem.playerId
        )
      })
      context.setData({
        zegoPlayerList: context.data.zegoPlayerList
      })
    }
  })
  // the event is triggered when one join or leave the room
  zg.on("roomUserUpdate", (roomID, updateType, userList) => {
    console.log("roomID: ", roomID, " updateType: ", updateType === "ADD" ? "join" : "leave", " userList: ", userList)
    let roomUserList = context.data.roomUserList
    if (updateType === "DELETE") {
      userList.forEach((user) => {
        const i = roomUserList.findIndex((item) => item.userID === user.userID)
        roomUserList.splice(i, 1)
      })
    } else if (updateType === "ADD") {
      userList.forEach((user) => {
        if (user.userID !== context.data.userID) {
          roomUserList.push(user)
        }
      })
    }
    context.setData({
      roomUserList
    })
  })
  zg.on("roomStateUpdate", (roomID, state, errorCode, extendedData) => {
    console.warn("roomStateUpdate", roomID, state, errorCode, extendedData)
    if (state === "DISCONNECTED") {
      context.setData({
        connectType: 0
      })
    }
  })
  zg.on("roomStateChanged", (roomID, state, errorCode, extendedData) => {
    console.warn("roomStateChanged", roomID, state, errorCode, extendedData)
    if (state === "RECONNECTED") {
      console.log("房间重连完成，进行恢复推拉流")
      context.setData({
        connectType: 1
      })
      context.forceRecoverPushAndPlay()
    } else if(state === "RECONNECTING") {
      console.log("房间重连中")
      context.setData({
        connectType: 0
      })
    }
  })
  zg.on("publisherStateUpdate", (result) => {
    const {
      state,
      streamID
    } = result
    console.warn("publisherStateUpdate", result)
    // 更新推流组件推流状态
    const zegoPusher = context.selectComponent("#zegoPusher")
    zegoPusher.setData({
      state
    })
  })
  zg.on("playerStateUpdate", (result) => {
    const {
      state,
      streamID
    } = result
    context.data.zegoPlayerList.find(item => {
      console.warn("playStateUpdate", result)
      // 更新拉流组件拉流状态
      const zegoPlayer = context.selectComponent(`#${item.componentID}`)
      if (!zegoPlayer) return false
      if (zegoPlayer.data.playerId === streamID) {
        zegoPlayer.setData({
          state
        })
        return true
      }
    })
  })
  zg.on("publishQualityUpdate", (streamID, publishStats) => {
    console.log("publishQualityUpdate", streamID, publishStats)
  })
  zg.on("playQualityUpdate", (streamID, playStats) => {
    console.log("playQualityUpdate", streamID, playStats)
  })
  zg.on("roomOnlineUserCountUpdate", (roomID, userCount) => {
    console.error("roomOnlineUserCountUpdate", roomID, userCount)
  })
  zg.on("recvReliableMessage", (roomID, userCount, trans_type) => {
    console.error("recvReliableMessage", roomID, userCount, trans_type)
  })
  zg.on("tokenWillExpire", (roomID) => {
    console.error("tokenWillExpire", roomID)
  })

  return zg
}

export const playAll = async (streamList, context) => {
  console.log("streamList", streamList)
  if (streamList.length === 0) {
    console.log("startPlayingStream, streamList is null")
    return
  }

  // 获取每个 streamId 对应的拉流 url
  for (let i = 0; i < streamList.length; i++) {
    /** 开始拉流，返回拉流地址 */
    try {
      let {
        streamID,
        url
      } = await zg.startPlayingStream(streamList[i].streamID, {
        sourceType: "BGP"
      })
      console.log("streamID", streamID, url)
      setPlayUrl(streamID, url, context)
    } catch (error) {
      console.error("error", error)
    }
  }
}

export const startPush = async (context, publishOption, config) => {
  try {
    /** 开始推流，返回推流地址 */
    zg.createPusher()
    zg.zegoWechatMini.setPusherAttributes(config)
    await zg.getPusherInstance().start(context.data.pushStreamID, publishOption)
  } catch (error) {
    console.error("error", error)
  }
}

export const setPlayUrl = (streamID, url, context) => {
  if (!url) {
    console.log(">>>[liveroom-room] setPlayUrl, url is null")
    return
  }
  console.log("setPlayUrl", streamID, url)
  for (let i = 0; i < context.data.livePlayerList.length; i++) {
    if (context.data.livePlayerList[i]["streamID"] === streamID && context.data.livePlayerList[i]["url"] === url) {
      console.log(">>>[liveroom-room] setPlayUrl, streamID and url are repeated")
      return
    }
  }

  let streamInfo = {
    streamID: "",
    url: ""
  }
  let isStreamRepeated = false

  // 相同 streamID 的源已存在，更新 Url
  for (let i = 0; i < context.data.livePlayerList.length; i++) {
    if (context.data.livePlayerList[i]["streamID"] === streamID) {
      isStreamRepeated = true
      context.data.livePlayerList[i]["url"] = url
      break
    }
  }

  // 相同 streamID 的源不存在，创建新 player
  if (!isStreamRepeated) {
    streamInfo["streamID"] = streamID
    streamInfo["url"] = url
    streamInfo["playerContext"] = wx.createLivePlayerContext(streamID)
    context.data.livePlayerList.push(streamInfo)
  }
  app.globalData.livePlayerList = context.data.livePlayerList
  context.setData({
    livePlayerList: context.data.livePlayerList
  },
    () => {
      context.addStreamRefer && context.addStreamRefer()
    }
  )
}

export const stopPlayAll = (streamList, context) => {
  if (streamList.length === 0) {
    console.log("stopPlayAll, streamList is empty")
    return
  }
  let playStreamList = context.data.livePlayerList
  for (let i = 0; i < streamList.length; i++) {
    let streamID = streamList[i].streamID
    zg.stopPlayingStream(streamID)
    // 把远程被删除的流从播放的流列表中删除
    for (let j = 0; j < playStreamList.length; j++) {
      if (playStreamList[j]["streamID"] === streamID) {
        playStreamList.splice(j, 1)
        break
      }
    }
  }
  context.setData({
    livePlayerList: playStreamList
  })
}

export const authCheck = async (context) => {
  if (!zg) return
  const result = await zg.checkSystemRequirements()
  console.log("checkSystemRequirements", result)
  if (result.code === 10001) {
    console.log("result ", result.code)
    wxp.showModal({
      title: "提示",
      content: "当前微信版本过低，无法使用该功能，请升级到最新微信版本后再试。",
      showCancel: false
    })
    context.setData({
      canShow: 0
    })
  } else if (result.code === 10002) {
    console.log("result ", result.code)
    let hasCamera = false
    let hasRecord = false
    wxp.authorize({
      scope: "scope.camera",
      success() {
        hasCamera = true
        context.setData({
          canShow: hasRecord ? 1 : 0
        })
      },
      fail() {
        hasCamera = false
        context.setData({
          canShow: 0
        })
      }
    })

    wxp.authorize({
      scope: "scope.record",
      success() {
        hasRecord = true
        context.setData({
          canShow: hasCamera ? 1 : 0
        })
      },
      fail() {
        hasRecord = false
        context.setData({
          canShow: 0
        })
      }
    })
  } else {
    context.setData({
      canShow: 1
    })
  }
}

export const _checkParam = (zegoAppID, server) => {
  if (!zegoAppID) {
    wx.showToast({
      title: `请在app.js中提供正确的zegoAppID`,
      icon: "none",
      duration: 5000
    })
    console.error("未设置正确的zegoAppID")
    return false
  }
  if (!server) {
    wx.showToast({
      title: `请在app.js中提供正确的server`,
      icon: "none",
      duration: 5000
    })
    console.error("未设置正确的server")
    return false
  }
  return true
}