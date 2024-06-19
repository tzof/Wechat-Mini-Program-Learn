// components/customCheckbox/customCheckbox.js
import behaviors from '../mixins/behavior' // 导入behaviors
// components构造页面功能要比page方法强大很多 如observers监听等
// 可以实现更加复杂逻辑的页面开发
Component({
  // 使用Component组件或者构造页面在.json中必须有usingComponents:{}
  // behaviors注册behaviors。
  // 如果存在相同的 数据 和 方法 会采用就近原则采用组件内部的数据，对象类型数据会进行合并
  // 如果存在相同的生命周期，生命周期都会被触发
  behaviors: [behaviors],
  // 组件生命周期声明对象
  lifetimes: {
    // 组件实例被创建好以后执行 created中不能使用setdata
    created() {
      console.log('created');
    },
    // 组件初始化完成，模版解析完成 已经把组件挂在到页面上并完成渲染 类似mounted
    attached() {
      console.log('attached');
    },
    // 组件被销毁时执行
    detached() {
      console.log('detached');
    }
  },
  // 组件所在页面的生命周期
  pageLifetimes: {
    // 监听组件所在页面展示状态 后台切前台
    show() {
      console.log('监听组件所在页面展示状态 冷启动 后台切前台');
      console.log(this.data, 'tzof 组建的show');
    },
    // 监听组件所在页面隐藏状态 前台切后台 点击tabbar
    hide() {
      console.log('监听组件所在页面隐藏状态 销毁 前台切后台 点击tabbar');
    }
  },
  options: {
    // multipleSlots 启用多个slot插槽支持
    multipleSlots: true,
    // styleIsolatio，默认情况下开启样式隔离isolated  
    // apply-shared表示父组件的样式能影响到自定义组件，但是自定义组件的样式不会影响父组件的样式
    // shared表示父组件的样式能影响到自定义组件，自定义组件的样式也能影响到其他设置了apply-shared或shared的自定义组件。属性值为shared时externalClasses失效
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
   * 组件的方法列表 Component里所有的方法都要写到methods中
   * 页面中page方法的一些钩子函数、生命周期、事件监听等钩子函数的方法必须放在methods中 如onLoad onReady等on开头的钩子函数
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
      // 获取properties中的数据要加.properties或者.data中获取
      console.log(this.properties.label);
      console.log(this.data.label, '获取父传子data');
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