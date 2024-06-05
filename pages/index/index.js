// pages/index/index.js
Page({

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
        console.log(event.detail.value);
    },
    /**
     * 生命周期函数--监听页面加载页面创建的时候执行 只会调用一次
     */
    onLoad(options) {
        console.log('onLoad', '页面创建的时候执行');
    },

    /**
     * 生命周期函数--监听页面初次渲染完成 只会调用一次
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