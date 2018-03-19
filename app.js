//app.js
App({
  onLaunch: function (){
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: (res) => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: (res) => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: (res) => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null
  },
  openId: 'o4CsA00D7RyytpUsEDsXpUt0cN3c',
  Api: function (url, data, success, fail){
    // url 请求地址, data 参数, success 成功的回调, fail 失败的回调
    var URL = 'https://api.silaishi.com'
    var build_params = require('./utils/build_params')
    data = build_params.build_params(data)
    wx.request({
      url: URL + url,
      header: { 'Content-Type': 'application/json' },
      data: data,
      success: function (res){
        success(res)
      },
      fail: function (res){
        fail(res)
      }
    })
  }
})
