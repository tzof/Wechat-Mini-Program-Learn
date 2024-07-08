// 使用监听属性需要导入ComponentWithComputed方法
import {
  ComponentWithComputed
} from 'miniprogram-computed'
// ComponentWithComputed替换Component方法构建组件
ComponentWithComputed({
  // watch数据监听器，用来监听数据是否发生变换，在数据变换后执行相应的逻辑
  watch: {
    // 不能使用箭头函数，箭头函数的this指向并非此组件的构造方法
    // 监听单个数据
    // numA: function(newValue) {
    //   console.log(newValue);
    // },
    // 可以监听多个数据，有一个发生改变就会执行
    // key使用''包过多个数据中用,分割
    // 不能使用箭头函数，箭头函数的this指向并非此组件的构造方法
    'numA,numB': function (newValueA, newValueB) {
      console.log(newValueA, newValueB);
      this.setData({
        numC: newValueA + newValueB
      })
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    numA: 1,
    numB: 2,
    numC: 1,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeData() {
      this.setData({
        numA: this.data.numA + 1,
      })
    }
  }
})