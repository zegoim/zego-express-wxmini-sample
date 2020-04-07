// pages/setting/index.js
import { wxp } from '../../app';

let globalData = getApp().globalData;
let { zegoAppID, server, cgi_token } = globalData;

Page({

    /**
     * 页面的初始数据
     */
    data: {
        _appID: zegoAppID,
        // _tokenURL: tokenURL,
        _serverURL: server,
        _cgi_token: cgi_token,
        useQR: 0
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function () {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

        //扫二维码的时候不更新
        if (this.data.useQR == 1) {
            this.data.useQR = 0;
            return;
        }

        zegoAppID = getApp().globalData.zegoAppID;
        // tokenURL = getApp().globalData.tokenURL;
        server = getApp().globalData.server;
        this.setData({
            _appID: zegoAppID,
            // _tokenURL: tokenURL,
            _serverURL: server,
        })
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    inputChange(e) {
        console.log('inputChange', e.detail, e.target);
        let name = e.target.dataset.name, value = e.detail.value;
        switch (name) {
            case 'appID':
                this.setData({
                    _appID: value
                });
                break;
            case 'tokenURL':
                this.setData({
                    _tokenURL: value
                });
                break;
            case 'serverURL':
                this.setData({
                    _serverURL: value
                });
                break;
            default :
                break;
        }

    },

    async submit() {
        if (this.data._appID !== zegoAppID ||
            this.data._cgi_token != cgi_token ||
            this.data._serverURL !== server) {
            const res = await wxp.showModal({
                title: '',
                content: '确定要修改么？',
            })
            if (res.confirm) {
                globalData.zegoAppID = this.data._appID * 1;
                console.log('zegoAppID', globalData.zegoAppID);
                globalData.server = this.data._serverURL;
                globalData.cgi_token = this.data._cgi_token;
                wxp.navigateBack({delta: 1});
            }
        } else {
            wxp.navigateBack({delta: 1});
        }
    },
    reset() {

        globalData.zegoAppID = 1739272706;
        // globalData.tokenURL = "https://wsliveroom-alpha.zego.im:8282/token";
        globalData.server = "wss://webliveroom-test.zego.im/ws";

        wxp.navigateBack({delta: 1});
    },
    async scanQR() {
        try {
            const {result, scanType} = await wxp.scanCode({})
            console.log(result, scanType)
            if (scanType === "QR_CODE") {
                let { appid, server, cgi_token } = JSON.parse(result);
                // if (appid && !server) {
                //     server = 'wss://wssliveroom' + appID + '-api.zego.im/ws';
                // }
                this.setData({
                    _appID: appid ? appid : this.data._appID,
                    _serverURL: server ? server : this.data._serverURL,
                    _cgi_token: cgi_token,
                });
                this.data.useQR = 1;
            } else {
                console.error('扫描的不是二维码')
            }
        } catch(error) {
            console.error('扫描失败', error);
        }
    }
});