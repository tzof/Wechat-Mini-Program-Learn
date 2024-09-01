// 使用计算属性需要导入ComponentWithComputed方法
import {
  ComponentWithComputed
} from 'miniprogram-computed'
// ComponentWithComputed替换Component方法构建组件
ComponentWithComputed({

  // 计算属性：基于已有的数据产生新的数据
  computed: {
    // 计算属性方法内部必须有返回值 return
    // 在计算属性内部不能用this获取data里的数据
    // 如果要获取data需要使用形参中的data
    // 计算属性只使用一次，后续使用中返回的是第一次的执行结果
    // 依赖的数据发生改变会重新执行
    total(data) {
      console.log(data, '我是computed');
      return data.num1 + data.num2 + data.num3
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    num1: 123,
    num2: 321,
    num3: 456
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeData() {
      console.log(this.data.num1);
      this.setData({
        num1: 3
      })
    }
  }
})

// 使用computedBehavior 方法，直接在Component内写computed和watch
// const computedBehavior = require('miniprogram-computed').behavior
// Component({
//   behaviors: [computedBehavior],
//   computed: {
//     total(data) {
//       console.log(data, '我是computed');
//       return data.num1 + data.num2 + data.num3
//     }
//   },
//   watch: {
//     'num1,num2': function (newValueA, newValueB) {
//       console.log(newValueA, newValueB);
//     }
//   },
//   data: {
//     num1: 123,
//     num2: 321,
//     num3: 456
//   },
// })