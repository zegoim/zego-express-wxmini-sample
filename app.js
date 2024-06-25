import { promisifyAll } from 'miniprogram-api-promise';

export const wxp = {}

App({
  globalData: {
    zegoAppID: 245697902, // 填写自己账号下的AppID
    server: 'wss://webliveroom245697902-api.zego.im/ws', // 填写自己账号下的server
    userID:  '', //'sample1719385603291', // userID
    token: '', //'04AAAAAGuiGhQAEGN2cDVuMjcwcTNlaXAwZ3gA0PEoyydl66sp7OI8Jfk3rU/G1/t8HqRzQpwEMuvtMkD2I+v/CWUOBJ/Potb6xF9hgORHCzN1u7V3lEey0oYK23QhjZpEPVoftSe7BEOqDqLZJFxfloIaN44ki0OSiO8DCQgvRVyuQRDUW/3V4aGNOvHezz2Vr1cFPvRccf+Kx2LLGyNq0dBiKDrl+voOoc9Mi67yKDgpXVfaYX6DBQcq4l1AFM9LVz1w5pxjsQYpZZ2Znh6sOXDisuhYSfIbAPspqkj7Oel8rt6qgsVE03O481A=' // 从ZEGO管理控制台生成的token，可以填写到此处
  },
  
  onLaunch() {
    // 扩展微信小程序api支持promise
    promisifyAll(wx, wxp);
  }
});
