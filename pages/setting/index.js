// pages/setting/index.js
import { wxp } from '../../app';
let globalData = getApp().globalData;
Page({
    /**
     * 页面的初始数据
     */
    data: {
        _appID: 0,
        _serverURL: '',
        _token: '',
        _userID: ''
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
      let { zegoAppID, server, token, userID } = globalData;
      this.originalGlobalData = {...globalData};
      this.setData({
            _appID: zegoAppID,
            _serverURL: server,
            _token: token,
            _userID: userID
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
            case 'token':
                this.setData({
                    _token: value
                });
                break;
            case 'userID':
              this.setData({
                  _userID: value
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
      let { zegoAppID, server, token, userID } = this.originalGlobalData;
      if (this.data._appID !== zegoAppID ||
          this.data._token != token ||
          this.data._userID != userID ||
          this.data._serverURL !== server) {
          const res = await wxp.showModal({
              title: '',
              content: '确定要修改么？',
          })
          if (res.confirm) {
              globalData.zegoAppID = this.data._appID * 1;
              globalData.server = this.data._serverURL;
              globalData.token = this.data._token;
              globalData.userID = this.data._userID;
              wxp.navigateBack({delta: 1});
          }
      } else {
          wxp.navigateBack({delta: 1});
      }
  },
  
    reset() {
      this.setData({
          _appID: 123,
          _serverURL: '',
          _token: '',
          _userID: ''
      });
      
      globalData.zegoAppID = this.data._appID;
      globalData.server = this.data._serverURL;
      globalData.token = this.data._token;
      globalData.userID = this.data._userID;
    }
});