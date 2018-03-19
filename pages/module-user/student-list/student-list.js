// pages/student-list/student-list.js
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    alert: false,
    name: '',
    Inx: 0,
    userList: []
  },

  // 解绑用户
  removeList () {
    var list = this.data.userList
    var Inx = this.data.Inx

    var params = {
      openid: app.openId,
      u_id: list[Inx].u_id,
      open_type: 'wechat_family'
    }
    var that = this

    app.Api('/Wechat/getUserBind', params, function (res){
      list.splice(Inx, 1)
      that.setData({
        userList: list,
        alert: !that.data.alert
      })
    })
  },
  // 弹窗
  alertOpen (e) {
    var Inx = parseInt(e.currentTarget.dataset.text)
    var list = this.data.userList
    this.setData({
      alert: !this.data.alert,
      name: list[Inx].u_name,
      Inx: e.currentTarget.dataset.text
    })
  },
  alertClose () {
    this.setData({
      alert: !this.data.alert
    })
  },

  // 获取绑定列表
  getUserList () {
    var that = this
    var params = {
      openid: app.openId,
      status: 1,
      open_type: 'wechat_family'
    }
    app.Api('/stampWeChat/getUserBind', params, function (res){
      that.setData({
        userList: res.data.data
      })
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options){
    this.getUserList()
  },

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
