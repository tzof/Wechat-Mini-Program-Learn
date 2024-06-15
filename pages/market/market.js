// pages/market/market.js
Page({


  /**
   * 页面的初始数据
   */
  data: {
    numList: [1, 2, 3]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  // 监听用户下拉刷新
  // app.json或page.json中通过enablePullDownRefresh是否开启下拉刷新
  onPullDownRefresh() {
    console.log('监听下拉刷新');
    this.setData({
      numList: [1, 2, 3]
    })
    // 在下拉数学以后，下来的loading效果可能不会弹回去
    if (this.data.numList.length == 3) {
      // 手动关闭下拉loading效果
      wx.stopPullDownRefresh()
    }
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  // 监听用户上拉加载更多
  // app.json或page.json中通过onReachBottomDistance配置触发距离，默认50(px)
  onReachBottom() {
    console.log('监听上拉加载');
    wx.showLoading({
      title: '加载中',
    })
    setTimeout(() => {
      this.data.numList.push(this.data.numList[this.data.numList.length - 1] + 1)
      this.setData({
        numList: this.data.numList,
      })
      wx.hideLoading()
    }, 1000);
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})