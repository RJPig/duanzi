// miniprogram/gugedz/image.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dzlist: [],
    currentPage: 1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    wx.cloud.callFunction({
      name: "duanzi",
      data: {
        page: 1,
        count: 10,
        type: "image"
      },
      success(res) {
        console.log(res);
        that.setData({
          dzlist:res.result.result
        })
      }
    }
    )
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function (event) {
    this.setData({
      currentPage: this.data.currentPage+1
    })
    this.getDz(this.data.currentPage)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  // 封装函数
  getDz(page) {
    let that = this
    wx.cloud.callFunction({
      name: "duanzi",
      data: {
        page: page,
        count: 10,
        type: "image"
      },
      success(res) {
        // console.log(res);
        let arr = that.data.dzlist.concat(res.result.result)
        // console.log(arr);
        
        that.setData({
          dzlist: arr
        })
      }
    }
    )
  }
})