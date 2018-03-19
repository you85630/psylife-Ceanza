// pages/index/index.js
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    user: {},
    psyList: [{
        linkto: '/pages/module-read/read-index/read-index',
        cover: 'http://static.silaishi.com/wechat/wximgs/report-1.png',
        name: '小思学院·阅读',
        state: true
      },
      {
        linkto: '/pages/module-course/course-index/course-index',
        cover: 'http://static.silaishi.com/wechat/wximgs/report-5.png',
        name: '小思学院·课程',
        state: true
      },
      {
        linkto: '/pages/module-arts/arts-index/arts-index',
        cover: 'http://static.silaishi.com/wechat/wximgs/report-2.png',
        name: '小思学院·艺术',
        state: true
      },
      {
        linkto: '/pages/module-badge/badge-index/badge-index',
        cover: 'http://static.silaishi.com/wechat/wximgs/report-3.png',
        name: '小思徽章',
        state: true
      },
      {
        linkto: '',
        cover: 'http://static.silaishi.com/wechat/wximgs/report-4.png',
        name: '小思万里行',
        state: false
      },
      {
        linkto: '',
        cover: 'http://static.silaishi.com/wechat/wximgs/report-6.png',
        name: '期末学科评价',
        state: true
      }
    ]
  },
  // 获取绑定用户
  getUserBind(key) {
    var that = this
    var list = {
      openid: app.openId,
      status: 1,
      open_type: 'wechat_family'
    }
    app.Api('/stampWeChat/getUserBind', list, function (res) {
      wx.setStorageSync('Uid', res.data.data[0].u_id)
    })
    var value = wx.getStorageSync('Uid')
    if (!key) {
      key = value
    }
    var params = {
      openid: app.openId,
      status: 1,
      u_id: key,
      open_type: 'wechat_family'
    }
    app.Api('/Wechat/getUserBind', params, function (res) {
      that.setData({
        user: res.data.data[0]
      })
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getUserBind(options.uid)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {}
})
