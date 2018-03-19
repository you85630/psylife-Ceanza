// pages/module-read/read-analyze/read-analyze.js
const app = getApp()

import * as echarts from '../../../ec-canvas/echarts'

function getOption (value){
  return {
    radar: {
      indicator: [
        { name: '复述' },
        { name: '解释' },
        { name: '重整' },
        { name: '伸展' },
        { name: '评价' },
        { name: '鉴赏' }
      ]
    },
    series: [
      {
        type: 'radar',
        data: [
          {
            value: value
          }
        ]
      }
    ]
  }
}

Page({
  /**
   * 页面的初始数据
   */
  data: {
    radar: {
      onInit: function (canvas, width, height){
        const barChart = echarts.init(canvas, null, {
          width: width,
          height: height
        })
        canvas.setChart(barChart)
        barChart.setOption(getOption())
      }
    }
  },

  getDate (key) {
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
