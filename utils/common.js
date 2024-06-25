// import { ZegoExpressEngine } from "zego-express-engine-miniprogram";
import {
  ZegoExpressEngine
} from '../libs/ZegoExpressMiniProgram';

import {
  wxp
} from "../app.js";
const app = getApp();

let zg;

export const initSDK = (context) => {
  if (!_checkParam(app.globalData.zegoAppID, app.globalData.server)) return false;
  /** 初始化SDK，userID 为用户自定义ID，全局唯一 */
  zg = new ZegoExpressEngine(app.globalData.zegoAppID, app.globalData.server);

  console.log('version', zg.getVersion());
  zg.setDebugVerbose(false);
  // zg.setLogConfig({
  //         logURL: ''
  // });
  authCheck(context);

  // console.log(this);
  zg.on("roomStreamUpdate", (roomID, updateType, streamList) => {
    console.warn("roomStreamUpdate", roomID, updateType, streamList);
    if (updateType === "ADD") {
      context.setData({
        streamList: streamList
      })
      playAll(streamList, context);
    } else {
      stopPlayAll(streamList, context);
    }
  });
  // the event is triggered when one join or leave the room
  zg.on("roomUserUpdate", (roomID, updateType, userList) => {
    console.warn(
      "roomID: ",
      roomID,
      " updateType: ",
      updateType === "ADD" ? "join" : "leave",
      " userList: ",
      userList
    );
    let roomUserList = context.data.roomUserList;
    if (updateType === "DELETE") {
      userList.forEach((user) => {
        const i = roomUserList.findIndex((item) => item.userID === user.userID);
        roomUserList.splice(i, 1);
      });
    } else if (updateType === "ADD") {
      userList.forEach((user) => {
        if (user.userID !== context.data.userID) {
          roomUserList.push(user);
        }
      });
    }
    context.setData({
      roomUserList,
    });
  });
  zg.on("roomStateUpdate", async (roomID, state, errorCode, extendedData) => {
    console.warn("roomStateUpdate", roomID, state, errorCode, extendedData);
    context.setData({
      connectType: 0
    })
    if (state === "DISCONNECTED") {
      context.data.livePusher && context.data.livePusher.stop();

      let playStreamList = context.data.livePlayerList;
      for (let i = 0; i < playStreamList.length; i++) {
        let streamID = playStreamList[i].streamID;
        playStreamList[i].playerContext.stop()
        zg.stopPlayingStream(streamID);
        // 把远程被删除的流从播放的流列表中删除
        for (let j = 0; j < playStreamList.length; j++) {
          if (playStreamList[j]["streamID"] === streamID) {
            playStreamList.splice(j, 1);
            break;
          }
        }
      }
      context.setData({
        connectType: 0,
        livePlayerList: [],
        livePusherUrl: ''
      });
    } else if (state === "CONNECTED") {
      const playStreamList = context.data.livePlayerList;
      for (let i = 0; i < playStreamList.length; i++) {
        const playerContext = playStreamList[i].playerContext;
        if (playerContext) {
          playerContext.stop()
          playerContext.play();
        }
      }
      if (!context.data.isRelogin || context.data.needRepublish) {
        if ( context.data.livePusher && context.data.livePusherUrl && context.data.role == 1) {
          !context.data.needRepublish && context.data.pushStreamID && zg.stopPublishingStream(context.data.pushStreamID);
          republish(context)
        }
        playStreamList.length && context.setData({
          livePlayerList: []
        }, () => {
          context.setData({
            livePlayerList: playStreamList
          }, () => {
            for (let i = 0; i < context.data.livePlayerList.length; i++) {
              const playerContext = context.data.livePlayerList[i].playerContext;
              if (playerContext) {
                playerContext.play()
              }
            }
          })
        });
      }
      context.setData({
        connectType: 1,
        isRelogin: false
      });
    }
  });
  zg.on("publisherStateUpdate", (result) => {
    console.error("publishStateUpdate", result);
    // 根据错误码，房间状态为登陆情况进行重试
    const retryErrorCode = [ -1307]
    const needRepublish = retryErrorCode.includes(result.errorCode);
    if (result.state === "NO_PUBLISH" && needRepublish && context.data.connectType === 1) {
      republish(context)
    }
    context.setData({
      needRepublish: result.state === "NO_PUBLISH" && needRepublish && context.data.connectType !== 1
    })
  });
  zg.on("playerStateUpdate", async (result) => {
    console.warn("playStateUpdate", result);
    // 根据错误码，房间状态为登陆情况进行重试
    const retryErrorCode = [-2301]
    const needReplay = retryErrorCode.includes(result.errorCode);

    if (result.state === "NO_PLAY" && needReplay && context.data.connectType === 1) {
      const playStreamList = context.data.livePlayerList;
      const index = playStreamList.findIndex(item => item.streamID === result.streamID)
      const player = playStreamList[index];
      if (player) {
        // 这里需要根据自己的需求修改拉流配置
        let {
          streamID,
          url
        } = await zg.startPlayingStream(
          player.streamID, {
            sourceType: context.data.playSource || "BGP"
          }
        );
        player.playerContext?.stop();
        player.playerContext?.play();
        player.url = url
        playStreamList[index] = player
        context.setData({
          livePlayerList: playStreamList
        })
      }
    }
  });
  zg.on("publishQualityUpdate", (streamID, publishStats) => {
    console.log("publishQualityUpdate", streamID, JSON.stringify(publishStats));
  });
  zg.on("playQualityUpdate", (streamID, playStats) => {
    console.log("playQualityUpdate", streamID, JSON.stringify(playStats));
  });
  zg.on("roomOnlineUserCountUpdate", (roomID, userCount) => {
    console.warn("roomOnlineUserCountUpdate", roomID, userCount)
  });
  zg.on("recvReliableMessage", (roomID, userCount, trans_type) => {
    console.error("recvReliableMessage", roomID, userCount, trans_type);
  });
  zg.on("tokenWillExpire", (roomID) => {
    console.error("tokenWillExpire", roomID);
  });
  zg.on("mixerRelayCDNStateUpdate", (taskID, infoList) => {
    console.warn("mixerRelayCDNStateUpdate", taskID, JSON.stringify(infoList));
  });

  return zg;
};

export const playAll = async (streamList, context) => {
  console.log("streamList", streamList);
  if (streamList.length === 0) {
    console.log("startPlayingStream, streamList is null");
    return;
  }

  // 获取每个 streamId 对应的拉流 url
  for (let i = 0; i < streamList.length; i++) {
    /** 开始拉流，返回拉流地址 */
    try {
      let {
        streamID,
        url
      } = await zg.startPlayingStream(
        streamList[i].streamID, {
          sourceType: context.data.playSource || "BGP"
        }
      );
      console.log("streamID", streamID, url);
      setPlayUrl(streamID, url, context);
    } catch (error) {
      console.error("error", error);
    }
  }
};

export const startPush = async (context, publishOption) => {
  try {
    /** 开始推流，返回推流地址 */
    let {
      url
    } = await zg.startPublishingStream(context.data.pushStreamID, publishOption);
    console.warn(`startPush 推流地址${url}，推流类型：${publishOption?.sourceType}`);
    context.setData({
        livePusherUrl: url,
        livePusher: wx.createLivePusherContext(),
      },
      () => {
        context.data.livePusher.start();
      }
    );
  } catch (error) {
    console.error("error", error);
  }
};

export const setPlayUrl = (streamID, url, context) => {
  if (!url) {
    console.log(">>>[liveroom-room] setPlayUrl, url is null");
    return;
  }
  console.log("setPlayUrl", streamID, url);
  for (let i = 0; i < context.data.livePlayerList.length; i++) {
    if (
      context.data.livePlayerList[i]["streamID"] === streamID &&
      context.data.livePlayerList[i]["url"] === url
    ) {
      console.log(
        ">>>[liveroom-room] setPlayUrl, streamID and url are repeated"
      );
      return;
    }
  }

  let streamInfo = {
    streamID: "",
    url: ""
  };
  let isStreamRepeated = false;

  // 相同 streamID 的源已存在，更新 Url
  for (let i = 0; i < context.data.livePlayerList.length; i++) {
    if (context.data.livePlayerList[i]["streamID"] === streamID) {
      isStreamRepeated = true;
      context.data.livePlayerList[i]["url"] = url;
      break;
    }
  }

  // 相同 streamID 的源不存在，创建新 player
  if (!isStreamRepeated) {
    streamInfo["streamID"] = streamID;
    streamInfo["url"] = url;
    streamInfo["playerContext"] = wx.createLivePlayerContext(streamID);
    context.data.livePlayerList.push(streamInfo);
  }
  app.globalData.livePlayerList = context.data.livePlayerList
  context.setData({
    livePlayerList: context.data.livePlayerList,
  }, () => {
    context.addStreamRefer && context.addStreamRefer();
  });
};

export const stopPlayAll = (streamList, context) => {
  if (streamList.length === 0) {
    console.log("stopPlayAll, streamList is empty");
    return;
  }
  let playStreamList = context.data.livePlayerList;
  for (let i = 0; i < streamList.length; i++) {
    let streamID = streamList[i].streamID;
    zg.stopPlayingStream(streamID);
    // 把远程被删除的流从播放的流列表中删除
    for (let j = 0; j < playStreamList.length; j++) {
      if (playStreamList[j]["streamID"] === streamID) {
        playStreamList.splice(j, 1);
        break;
      }
    }
  }
  context.setData({
    livePlayerList: playStreamList
  });
};

export const authCheck = async (context) => {
  if (!zg) return;
  const result = await zg.checkSystemRequirements();
  console.log("checkSystemRequirements", result);
  if (result.code === 10001) {
    console.log("result ", result.code);
    wxp.showModal({
      title: "提示",
      content: "当前微信版本过低，无法使用该功能，请升级到最新微信版本后再试。",
      showCancel: false,
    });
    context.setData({
      canShow: 0,
    });
  } else if (result.code === 10002) {
    console.log("result ", result.code);
    let hasCamera = false;
    let hasRecord = false;
    wxp.authorize({
      scope: "scope.camera",
      success() {
        hasCamera = true;
        context.setData({
          canShow: hasRecord ? 1 : 0,
        });
      },
      fail() {
        hasCamera = false;
        context.setData({
          canShow: 0,
        });
      },
    });

    wxp.authorize({
      scope: "scope.record",
      success() {
        hasRecord = true;
        context.setData({
          canShow: hasCamera ? 1 : 0,
        });
      },
      fail() {
        hasRecord = false;
        context.setData({
          canShow: 0,
        });
      },
    });
  } else {
    context.setData({
      canShow: 1,
    });
  }
};

export async function republish(context) {
  if(context.data.role != 1) return
  const {
    url
  } = await zg.startPublishingStream(context.data.pushStreamID);
  console.log('url', context.data.livePusherUrl, url);
  context.setData({
    livePusherUrl: ""
  }, () => {
    context.data.livePusher && context.data.livePusher.stop();
    context.setData({
      livePusherUrl: url
    }, () => {
      // context.data.livePusher.start();
    });
  });
}

export const _checkParam = (zegoAppID, server) => {
  if (!zegoAppID) {
    wx.showToast({
      title: `请在app.js或在自定义设置中提供正确的zegoAppID`,
      icon: 'none',
      duration: 5000
    });
    console.error('未设置正确的zegoAppID');
    return false;
  }
  if (!server) {
    wx.showToast({
      title: `请在app.js或在自定义设置中提供正确的server`,
      icon: 'none',
      duration: 5000
    });
    console.error('未设置正确的server');
    return false;
  }
  return true;
};