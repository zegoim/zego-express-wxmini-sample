/*
 * @Author: sunboylu
 * @Date: 2021-01-15 10:39:53
 * @LastEditors: sunboylu
 * @LastEditTime: 2021-01-22 18:33:26
 * @Description: 
 */
const automator = require('miniprogram-automator');
import '../pages/test';
const Axios = require('axios');
const crypto = require('crypto');
const chai = require('chai');
const ZegoExpressEngine = require('../libs/ZegoExpressMiniProgram').ZegoExpressEngine;
const TIMEOUT = 10000;
const DELAY = 3000;
const APPID = 1739272706;
const SERVER = 'wss://webliveroom-test.zego.im/ws';
const tokenURL = 'https://wsliveroom-alpha.zego.im:8282/token';
const targetURL = 'rtmp://wsdemo.zego.im/livestream/test259';

const getToken = (app_id = APPID, id_name = '') =>
  Axios.get(tokenURL, {
    params: { app_id, id_name },
  }).then(data => data.data);
const randomStr = (n = 32) => Date.now().toString(n);
const md5 = (content) =>
  crypto
    .createHash('md5')
    .update(content)
    .digest('hex');
const getSignature = (appID, secret) =>
  md5(appID + Math.ceil(new Date().getTime() / 1000).toString() + secret);


describe('index', () => {
  let miniProgram,
    zg,
    token,
    userID,
    roomId,
    user;
  beforeAll(async () => {
    miniProgram = await automator.launch({
      projectPath: '/Users/zego/Desktop/zego/onlineDemo/zego-express-wxmini-sample',
      projectConfig: {
        setting: {
          autoAudits: true,
        },
      },
    })

  }, 300000)
  it('初始化', async () => {
    let page = await miniProgram.navigateTo('/pages/test/index');
    await page.waitFor(5000)
    // zg = await page.callMethod("initSDKEvent");
    // zg.setDebugVerbose(false);
    userID = randomStr();
    roomId = randomStr();
    token = await getToken(APPID, userID);
    console.log(token)
    
    let res = await page.callMethod("loginRoom", [roomId, token, userID,ZegoExpressEngine]);
    console.log(res);
    console.log('111111');
    await page.waitFor(5000)
  }, 300000)

  // it('登录房间 roomId 传入非字符串，会返回 rejected 状态', async function () {
  //   roomId = "1234";
  //   try {
  //     // @ts-ignore
  //    zg.loginRoom(roomId, token, user);
  //     await page.waitFor(5000)
  //     chai.assert.ok(false, 'should be rejected');
  //   } catch (e) {
  //     chai.assert.ok(true, 'should be rejected');
  //   }
  // },30000);
  afterAll(async () => {
    await miniProgram.close()
  })
})