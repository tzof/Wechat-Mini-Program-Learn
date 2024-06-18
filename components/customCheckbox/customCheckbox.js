// components/customCheckbox/customCheckbox.js
Component({
  options: {
    // multipleSlots 启用多个slot插槽支持
    multipleSlots: true,
    // styleIsolatio，默认情况下开启样式隔离isolated  
    // apply-shared表示父组件的样式能影响到自定义组件，但是自定义组件的样式不会影响父组件的样式
    // shared表示父组件的样式能影响到自定义组件，自定义组件的样式也能影响到其他设置了apply-shared或shared的自定义组件
    styleIsolation: "shared"
  },
  /**
   * 组件的属性列表
   * 组件的对外属性，主要用来接收组件使用者传递给组件内部的属性以及数据
   * 
   */
  properties: {
    // 如果需要接受传递的属性 全写 简写
    label: String,
    position: {
      type: String,
      value: 'left' // 默认值
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isChecked: false,
    num: 132,
    obj1: {
      name: 'tzof',
      age: 24
    },
    arr: [1, 2, 3, 4]
  },
  // observers用来监听数据以及属性是否发生变化
  observers: {
    isChecked: (newVal) => {
      console.log(newVal, '我是observers');
    },
    // 同时监听多个数据 有一个发生变化就会被监听到
    'isChecked, num': (newVal1, newVal2) => {
      console.log(newVal1, newVal2, '我是observers');
    },
    // 监听对象属性以及数据元素的变化 使用数据路径写在''字符串中
    // 对象和数组里的值只能通过setdata修改才能被监听到 直接赋值无法监听
    'obj1.age': (newVal) => {
      console.log(newVal, '我是observers对象属性发生改变');
    },
    'arr[4]': (newVal) => {
      console.log(newVal, '我是observers数组元素发生改变');
    },
    // 监听对象中所有属性的变化 使用.**通配符。无法监听整个数组
    'obj1.**': (newVal) => {
      console.log(newVal, '我是observers对象发生改变');
    },
    // 监听properties父传子的值
    label: (newVal) => {
      console.log(newVal, '我是observers监听properties父传子的值发生改变');
    },
    // 监听所有的改变的值 包括data和properties
    '**': (newVal) => {
      console.log(newVal, '我是observers监听所有setdata');
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onClickCheck() {
      // 对象和数组里的值只能通过setdata修改才能被监听到 直接赋值无法监听
      this.setData({
        // isChecked: !this.data.isChecked
        // 在组件内部也可以修改properties中的数据，一般不建议子组件内修改
        // label: '测试修改父传子的值'
        'obj1.name': 'hahahah',
        'obj1.age': 18,
        'arr[4]': 4
      })
      this.data.num = 1;
      console.log(this.data.isChecked);
      // 获取properties中的数据要加.properties
      console.log(this.properties.label);
      this.triggerEvent('myEvent', this.data.isChecked)
    },
    // 子传父
    onClickCtoF() {
      // 如果需要传递给父组件数据 类似emit
      // triggerEvent发射自定义事件 第一个参数事件名 第二个参数传递的值
      // 父组件内需要添加bind自定义事件命接收
      this.triggerEvent('myEvent', this.data.num)
    },
  }
})