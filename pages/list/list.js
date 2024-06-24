// pages/list/list.js
Page({
  navigateBack() {
    wx.navigateBack()
  },
  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log(options);
    // 通过this.getOpenerEventChannel方法可以获取eventChannel对象
    const eventChannel = this.getOpenerEventChannel();
    // eventChannel对象提供的on方法 监听页面发射的自定义事件
    // eventChannel.on(变量,回调函数)
    eventChannel.on('myEventData', (res) => {
      console.log(res);
    })
    eventChannel.on('myEventObj', (res) => {
      console.log(res);
    })
    // 通过eventChannel提供的emit方法也可以向上一级传递数据(打开此页面的页面)
    eventChannel.emit('cToFEventData', 'ldsfjjlksfd')
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