// pages/module-course/course-index/course-index.js
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
      u_id: key.uid
    }
    app.Api('/lesson/getUserWechatCourseInfo', params, function (res){
      var time = res.data.data.last_login_time
      var now = time.slice(0, 10)
      that.setData({
        user: {
          u_id: res.data.data.u_id,
          u_name: res.data.data.u_name,
          last_login_time: now,
          course_grow_value: res.data.data.course_grow_value,
          course_level: res.data.data.course_level,
          course_level_name: res.data.data.course_level_name,
          finished_detail_num: res.data.data.finished_detail_num,
          learning_lesson_num: res.data.data.learning_lesson_num,
          finished_lesson_num: res.data.data.finished_lesson_num,
          certificate_num: res.data.data.certificate_num,
          evaluate_num: res.data.data.evaluate_num,
          works_num: res.data.data.works_num,
          good_works_num: res.data.data.good_works_num
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
