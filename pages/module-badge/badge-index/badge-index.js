// pages/module-badge/badge-index/badge-index.js
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    user: {}
  },
  getUser (key) {
    var that = this
    var params = {
      u_id: key.uid,
      s_id: key.sid,
      c_id: key.cid
    }
    app.Api('/stampWeChat/getStampNineInfo', params, function (res){
      that.setData({
        user: {
          bad: res.data.data.bad,
          get_cj_num: res.data.data.get_cj_num,
          good: res.data.data.good,
          jf: res.data.data.jf,
          most_category: res.data.data.most_category,
          reply_num: res.data.data.reply_num,
          star_time: res.data.data.star_time,
          tech_num: res.data.data.tech_num,
          today_num: res.data.data.today_num,
          total: res.data.data.total,
          total_cj_num: res.data.data.total_cj_num
        }
      })
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options){
    this.getUser(options)
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
