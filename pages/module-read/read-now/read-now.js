// pages/module-read/read-now/read-now.js
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    open: 0,
    list: [],
    show: false
  },
  openInfo (e) {
    let Inx = e.currentTarget.dataset.text
    this.setData({
      open: Inx
    })
  },
  getData (key) {
    var that = this
    var params = {
      u_id: key.uid
    }
    app.Api('/book/getReadingBookList', params, function (res){
      var now = res.data.data
      var state
      if (now) {
        now = now
        state = true
      }
      else {
        now = []
        state = false
      }
      that.setData({
        list: now,
        show: state
      })
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options){
    this.getData(options)
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
