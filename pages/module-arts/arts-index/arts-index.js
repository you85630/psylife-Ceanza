// pages/module-arts/arts-index/arts-index.js
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
      s_id: key.sid
    }
    app.Api('/wechat_art/artAnalysis', params, function (res){
      that.setData({
        user: {
          u_name: res.data.data.u_name,
          art_grow_value: res.data.data.art_grow_value,
          last_login: res.data.data.last_login,
          art_level: res.data.data.art_level,
          art_level_name: res.data.data.art_level_name,
          appreciated_jing_nums: res.data.data.appreciated_jing_nums,
          jing_nums: res.data.data.jing_nums,
          my_works_publish_nums: res.data.data.my_works_publish_nums,
          my_works_jing_nums: res.data.data.my_works_jing_nums,
          my_comments_jing_nums: res.data.data.my_comments_jing_nums,
          appreciated_nums: res.data.data.appreciated_nums,
          comments_publish_nums: res.data.data.comments_publish_nums,
          answer_right_nums: res.data.data.answer_right_nums,
          answer_wrong_nums: res.data.data.answer_wrong_nums
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
