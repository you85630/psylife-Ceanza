// pages/card/card.js
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    cardContent: {},
    lookCard: {}
  },

  // 获取绑定用户信息
  getUserInfo (key) {
    var that = this
    var params = {
      u_id: key
    }
    app.Api('/wechat/getUserInfo', params, function (res){
      that.setData({
        cardContent: res.data.data[0],
        lookCard: {
          Uid: key,
          Sid: res.data.data[0].s_id
        }
      })
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options){
    this.getUserInfo(options.uid)
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
