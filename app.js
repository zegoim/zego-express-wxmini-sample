import { promisifyAll } from 'miniprogram-api-promise';

export const wxp = {}

App({
  globalData: {
    zegoAppID: 123, // 填写自己账号下的AppID
    server: '', // 填写自己账号下的server
    userID: '', // userID
    token: '' // 从ZEGO管理控制台生成的token，可以填写到此处
  },
  
  onLaunch() {
    // 扩展微信小程序api支持promise
    promisifyAll(wx, wxp);
  }
});
