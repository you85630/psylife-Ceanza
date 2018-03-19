// pages/add-student/add-student.js
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    active: false,
    addMsg: {},
    code: '',
    pass: ''
  },

  select () {
    this.setData({
      active: !this.data.active
    })
  },
  // 获取绑定用户信息
  getCode (e) {
    this.setData({
      code: e.detail.value
    })
  },
  getPass (e) {
    this.setData({
      pass: e.detail.value
    })
  },
  // 绑定
  bindUser (key) {
    if (this.data.active) {
      var User = {
        code: this.data.code,
        pass: this.data.pass
      }
      var params = {
        openid: app.openId,
        gu_code: this.data.code,
        b_pass: this.data.pass,
        open_type: 'wechat_family'
      }
      var that = this
      app.Api('/wechat/bind_stu', params, function (res){
        var msg = res.data
        var now
        if (msg.code === '200') {
          now = true
        }
        else {
          now = false
        }
        that.setData({
          addMsg: {
            main: msg.info,
            star: now
          }
        })
      })
    }
  },
  bindStar () {
    let star = this.data.addMsg
    if (star.star) {
      wx.redirectTo({
        url: '/pages/module-user/student-list/student-list'
      })
    }
    else {
      wx.redirectTo({
        url: '/pages/module-user/add-student/add-student'
      })
    }
    this.setData({
      addMsg: {},
      code: '',
      pass: '',
      active: false
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options){},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function (){},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function (){},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function (){},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function (){},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function (){},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function (){},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (){}
})
