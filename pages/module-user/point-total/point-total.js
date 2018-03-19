// pages/point-total/point-total.js
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    now: true,
    keyList: {},
    page: 1,
    pageSize: 10,
    collect: {},
    PointMx: []
  },

  // 切换in/out
  selectLi () {
    this.setData({
      now: !this.data.now,
      page: 1
    })
    this.getList()
  },

  // 滑动事件
  touchList () {
    this.setData({
      page: this.data.page + 1
    })
    var that = this
    var star
    if (this.data.now) {
      star = 'in'
    }
    else {
      star = 'out'
    }
    var data = {
      u_id: this.data.keyList.Uid,
      s_id: this.data.keyList.Sid,
      page: this.data.page,
      pageSize: this.data.pageSize,
      mode: star
    }
    var list = this.data.PointMx
    app.Api('/point/getPointMx', data, function (res){
      list = list.concat(res.data.main)
      that.setData({
        PointMx: list
      })
    })
  },

  // 默认数据
  getPointTotal (key) {
    var that = this
    var all = {
      u_id: key.Uid,
      s_id: key.Sid
    }
    app.Api('/point/getPointTotal', all, function (res){
      that.setData({
        collect: res.data,
        keyList: key
      })
    })
    var data = {
      u_id: key.Uid,
      s_id: key.Sid,
      page: this.data.page,
      pageSize: this.data.pageSize,
      mode: 'in'
    }
    app.Api('/point/getPointMx', data, function (res){
      that.setData({
        PointMx: res.data.main
      })
    })
  },

  // 获取进出账数据
  getList () {
    var that = this
    var star
    if (this.data.now) {
      star = 'in'
    }
    else {
      star = 'out'
    }
    var data = {
      u_id: this.data.keyList.Uid,
      s_id: this.data.keyList.Sid,
      page: this.data.page,
      pageSize: this.data.pageSize,
      mode: star
    }
    app.Api('/point/getPointMx', data, function (res){
      that.setData({
        PointMx: res.data.main
      })
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options){
    this.getPointTotal(options)
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
