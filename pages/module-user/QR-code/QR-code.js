// pages/QR-code/QR-code.js
var QR = require('../../../utils/qrcode.js')
Page({
  /**
   * 页面的初始数据
   */
  data: {
    imagePath: ''
  },

  // 页面报错，暂时没有发现是啥问题

  getGuCode (key) {
    var size = this.setCanvasSize() //动态设置画布大小
    this.createQrCode(key, 'mycanvas', size.w, size.h)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options){
    this.getGuCode(options.gucode)
  },
  //适配不同屏幕大小的canvas
  setCanvasSize: function (){
    var size = {}
    try {
      var res = wx.getSystemInfoSync()
      var scale = 750 / 686
      var width = res.windowWidth / scale
      var height = width
      size.w = width
      size.h = height
    } catch (e) {
      console.log('获取设备信息失败' + e)
    }
    return size
  },
  createQrCode: function (url, canvasId, cavW, cavH){
    QR.api.draw(url, canvasId, cavW, cavH)
    setTimeout(() => {
      this.canvasToTempImage()
    }, 1000)
  },

  //获取临时缓存照片路径，存入data中
  canvasToTempImage: function (){
    var that = this
    wx.canvasToTempFilePath({
      canvasId: 'mycanvas',
      success: function (res){}
    })
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
