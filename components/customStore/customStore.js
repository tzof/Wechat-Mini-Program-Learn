// components/customStore/customStore.js
// 如果需要在组件中使用store中的数据以及方法需要从'mobx-miniprogram-bindings'中引入ComponentWithStore方法
import {
  ComponentWithStore
} from 'mobx-miniprogram-bindings'
// 当入当前组件需要使用的store对象
import numstore from '../..//stores/numstore'
// 需要使用ComponentWithStore方法将Component方法进行替换Component({}) --> ComponentWithStore({})
ComponentWithStore({
  // storeBindings用来配置当前组件需要与哪些store进行关联
  // 注意从store对象中引入方法和数据以后 
  // 如果是数据会被注入到data中
  // 如果是方法会被注入到methods中
  storeBindings: {
    // store需要用到的store实例
    store: numstore,
    // fields需要用的数据 包括计算属性 会被注入到data中
    // fields: ['numA', 'numB', 'sum'], // 数组写法
    // actions需要用到的action方法 会被注入到methods中
    // actions: ['update'], // 数组写法
    // 如果一个组件或者页面需要绑定多和store对象实例
    // storeBindings 数组方式使用store
    // 数组的每一项是一个个要绑定的 store实例对象
    storeBindings: [],
    // fields和actions有两种写法 数组写法  对象写法
    // storeBindings
    fields: { // 对象写法 会被注入到data中
      // 如果fields改成对象写法，数据也有两种写法 映射写法 函数写法
      // fields改为对象写法后key可以自定义
      // 映射写法 key可以自定义
      // numA: 'numA',
      // numB: 'numB',
      // sum: 'sum',
      // 函数写法 key可以自定义
      // key：data中哪些字段来源于store
      // value：函数 在函数内部需要返回对应store实例里数据的值 numstore.numA
      numA: () => numstore.numA,
      numB: () => numstore.numB,
      sum: () => numstore.sum,
    },
    actions: { // 对象写法 会被注入到methods中
      // actions对象写法中只有一种映射写法，key可以自定义
      update: 'update'
    },
  },
})
// 小程序页面如果要使用store中的数据或方法，并且继续使用Page或者Component构造方法需要behaviors:[behaviorsStore]引入
// import behaviorsStore from './behaviorStore'
// Component({
// behaviors: [behaviorsStore],
// lifetimes: {
//   attached(){
//     console.log('"tzpfoifofoofof++++++++++________________!!!!!!!!___');    }
// }
// })