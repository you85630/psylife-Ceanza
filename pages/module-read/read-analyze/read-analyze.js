// pages/module-read/read-analyze/read-analyze.js
const app = getApp()
var wxCharts = require('../../../utils/wxcharts.js')
var radarChart = null
Page({
  /**
   * 页面的初始数据
   */
  data: {},

  getDate (key) {
    var windowWidth = 320
    try {
      var res = wx.getSystemInfoSync()
      windowWidth = res.windowWidth
    } catch (e) {
      console.error('getSystemInfoSync failed!')
    }

    radarChart = new wxCharts({
      canvasId: 'radarCanvas',
      type: 'radar',
      categories: [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6'
      ],
      series: [
        {
          data: [
            90,
            110,
            125,
            95,
            87,
            122
          ]
        }
      ],
      width: windowWidth,
      height: 200,
      extra: {
        radar: {
          max: 150
        }
      }
    })
    var that = this
    var params = {
      u_id: key.uid
    }
    app.Api('/book/readAbility', params, function (res){
      var list = res.data.data.dimension
      console.log(list)
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options){
    this.getDate(options)
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
