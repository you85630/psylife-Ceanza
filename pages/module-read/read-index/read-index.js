// pages/module-read/read-index/read-index.js
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    user: {}
  },
  getData (key) {
    var that = this
    var params = {
      u_id: key.uid,
      s_id: key.sid
    }
    app.Api('/book/readAnalysis', params, function (res){
      var time = res.data.data.login
      var now = time.slice(0, 10)
      that.setData({
        user: {
          u_id: res.data.data.u_id,
          name: res.data.data.name,
          s_id: res.data.data.s_id,
          login: now,
          finishedbook: res.data.data.finishedbook,
          readingbook: res.data.data.readingbook,
          srecommend: res.data.data.srecommend,
          sfinished: res.data.data.sfinished,
          highfinished: res.data.data.highfinished,
          comm: res.data.data.comm,
          commrecommend: res.data.data.commrecommend,
          answertotal: res.data.data.answertotal,
          answercorrect: res.data.data.answercorrect,
          dcz: res.data.data.dcz,
          level: {
            invest: res.data.data.level.invest,
            info: res.data.data.level.info
          }
        }
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
  onShareAppMessage: function (){
    console.log(1)
  }
})
