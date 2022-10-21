function _getTokenFromGlobal() {
  return getApp().globalData.token;
}

function _getUserIDFromGlobal() {
  return getApp().globalData.userID;
}

export function getTokenAndUserID() {
  if (!_getTokenFromGlobal() || !_getUserIDFromGlobal()) {
    wx.navigateTo({
      url: '/pages/setting/index',
      success: ()=> {
        wx.showToast({
          title: `请设置正确的UserID和Token`,
          icon: 'none',
          duration: 3000
        });
      },
      fail: ()=>{
        console.error("userID and Token haven't been set.")
      }
    });
    return null;
  }
  return { token: _getTokenFromGlobal(), userID: _getUserIDFromGlobal() };
}