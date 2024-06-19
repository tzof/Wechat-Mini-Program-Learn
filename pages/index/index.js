// pages/index/index.js
Page({
  // options: {
  //   // 低版本需要修改van组件的样式 需要修改样式隔离styleIsolation为shared
  // },
  /**
   * 页面的初始数据
   */
  data: {
    text: 'ceshi',
    obj1: {
      name: '测试1',
      value: 100,
      com: '岁'
    },
    arr1: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
    value: '',
    label: '我已阅读并同意用户协议和隐私协议',
  },
  onTapTest(event) {
    // currentTarget事件绑定的dom
    // target事件触发的dom
    console.log('event tap', event)
    // 赋值方式修改数据只能更新data中的数据不能更新wxml中的数据 包括delete
    this.data.text = 123;
    console.log(this.data.text);
    // this.setData({datakey:value}) 里面不需要加this.data
    let obj = {
      ...this.data.obj1,
      name: '整个对象修改',
      value: 200,
    }
    this.setData({
      text: '321312321',
      'obj1.name': '测试修改对象内的属性',
      'obj1.value': '测试修改value',
      obj1: obj
    })
    // 删除改变data里的数据不改变wxml中展示的数据，重新将this.data中的数据setData赋值给本身可以修改页面展示数据 在setdata中修改的数据data中也会发生改变
    setTimeout(() => {
      delete this.data.obj1.name;
      this.setData({
        obj1: this.data.obj1
      })
    }, 2000);
    setTimeout(() => {
      // es6中rest对象中其他剩余属性
      let {
        name,
        value,
        ...rest
      } = this.data.obj1;
      this.data.arr1.push('tzof')
      this.setData({
        obj1: rest,
        text: '测试修改',
        arr1: this.data.arr1,
      })
      console.log(this.data.text);
    }, 4000);
  },
  onInputTest(event) {
    // event事件对象获取传递的数据 event.detail组件的数据
    console.log(event.detail.value);
  },
  onClickGetData() {
    // showLoading显示loading框
    wx.showLoading({
      // 提示的文本内容
      // 提示的内容不会自动换行，多的内容会被隐藏
      title: '数据加载中',
      // 是否显示蒙层
      // 默认false，开启蒙层后无法点击页面内容
      mask: true,
    })
    // wx.request发起网络请求
    wx.request({
      url: 'http://127.0.0.1:217/getdata',
      method: 'GET',
      // 请求参数
      data: {},
      // 请求头
      header: {},
      // 成功执行的回调
      success: (res) => {
        console.log(res);
        // 关闭loading框
        wx.hideLoading();
      },
      // 失败执行的回调
      fail: (err) => {
        console.log(err);
      },
      // 不管调用成功还是失败都会执行
      complete: (res) => {
        console.log(res);
      },
    })
  },
  async onClickExit() {
    // 显示模块对话框
    wx.showModal({
      // // 是否显示取消
      // showCancel: true,
      // // 取消颜色
      // cancelColor: 'cancelColor',
      // // 取消文字
      // cancelText: 'cancelText',
      // // 确定颜色
      // confirmColor: 'confirmColor',
      // // 确定文字
      // confirmText: 'confirmText',
      // // 是否显示输入框
      // editable: true,
      // // 显示输入框时的提示文字
      // placeholderText: 'placeholderText',
      showCancel: true,
      title: '提示标题',
      content: '提示内容',
      // 接口调用成功的回调函数(不管确定还是取消只要点击成功了都是成功)
      success: (res) => {
        console.log(res, '点击确定的回调');
      },
      // 接口调用失败的回调函数
      fail: (err) => {
        console.log(err, '点击取消的回调');
      },
      // 不管成功失败都会执行
      complete: (res) => {
        console.log(res, '不管点击确定或取消都会执行');
        wx.showToast({
          title: '把标题',
          icon: 'none',
          duration: 3000,
        })
      },
    });
    // 或者使用 对象返回的方法使用(注意添加await)
    const res = await wx.showModal({
      title: '测试',
      content: '测试内容111111',
    })
    // 参数有 cancel: 取消状态 confirm: 确定状态
    console.log(res);
  },
  setStorage() {
    wx.setStorageSync('tzof', 3212)
    // 微信本地存储对象不需要使用JSON.stringify和JSON.parse转换
    wx.setStorageSync('obj', {
      test: 123,
      tzof: 'ppp'
    })
    // 异步 {key:value}对象形式，里面必须有key,data表示值
    wx.setStorage({
      key: 'obj2',
      data: [1, 2, 2, 3, 34]
    })
  },
  async getStorage() {
    console.log(wx.getStorageSync('tzof'), wx.getStorageSync('obj'));
    // 异步 记得添加await
    console.log(await wx.getStorage({
      key: 'obj2'
    }));
  },
  removeStorage() {
    wx.removeStorageSync('tzof')
  },
  clearStorage() {
    wx.clearStorageSync();
  },
  // 使用url传参，子组件中在onLoad生命周期内options参数接收，switchTab不能传参
  navigateTo() {
    // 保留当前页面后转跳，所以有返回上一级，不能跳tabBar
    wx.navigateTo({
      url: '/pages/list/list?id=331004&name=yl',
    })
  },
  redirectTo() {
    // 销毁当前页面后转跳，所以没有返回上一级，不能跳tabBar
    wx.redirectTo({
      url: '/pages/list/list',
    })
  },
  switchTab() {
    // 销毁当前页面后转跳tabBar页面，不能转跳非tabBar页面
    wx.switchTab({
      url: '/pages/cart/cart',
    })
  },
  reLauch() {
    // 销毁所有页面后转跳，所以没有返回上一级。可以跳tabBar
    wx.reLaunch({
      url: '/pages/cart/cart',
    })
  },
  // 返回上一页或多级页面，默认一级
  navigateBack() {
    wx.navigateBack()
    // delta: 1,返回层级
    // wx.navigateBack({delta:1})
  },
  // 点击自定义组件
  onClickCusCheckbox() {
    this.setData({
      label: '改变label'
    })
  },
  // 子传父 父组件内要添加bind自定义事件名接收 event事件对象获取传递的数据 event.detail传递的数据
  CToFGetData(event) {
    console.log(event, event.detail);
  },
  // 获取子组件实例 可以获取子组件所有的变量和方法 类似ref
  getCDOm() {
    // selectComponent选择器 可以是.class #id获取子组件的实例
    const res = this.selectComponent('#customCheckbox')
    // 获取子组件 实例 数据(包括data和properties) 方法
    console.log(res, res.data, res.onClickCtoF);
  },
  // 点击图片
  onCLickImg() {
    console.log('点击了图片');
  },
  /**
   * 生命周期函数--监听页面加载页面创建的时候执行 只会调用一次
   */
  onLoad(options) {
    console.log('onLoad', '页面创建的时候执行');
  },

  /**
   * 生命周期函数--监听页面初次渲染完成 只会调用一次 
   * onShow执行完再直系onReady
   */
  onReady() {
    console.log('onReady', '页面初次渲染完成的时候执行');
  },

  /**
   * 生命周期函数--监听页面显示 后台切前台时候也会触发
   */
  onShow() {
    console.log('onShow', '页面展示的的时候执行');
  },

  /**
   * 生命周期函数--监听页面隐藏在当前小程序进入后台时也会触发
   */
  onHide() {
    console.log('onHide', '页面在隐藏时候触发');
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    console.log('onUnload', '页面销毁时触发');
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