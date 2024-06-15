// pages/profile/profile.js
Page({
  // 滚动到底触发事件 上拉加载更多
  onScrollToLower() {
    console.log('滚动到底触发事件 上拉加载更多');
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
  // 滚动条下拉刷新
  onScrollRefresh() {
    wx.showToast({
      title: '下拉刷新中',
      duration: 4000,
    })
    // wx.showLoading({
    //   title: 'title',
    // })
    setTimeout(() => {
      wx.showToast({
        title: '刷新成功',
      })
      this.setData({
        numList: [1, 2, 3],
        isTriggered: false,
      });
    }, 5000);
  },
  /**
   * 页面的初始数据
   */
  data: {
    numList: [1, 2, 3],
    isTriggered: false,
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
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})