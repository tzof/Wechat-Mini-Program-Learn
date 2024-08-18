// components/customStore/customStore.js
// 如果需要在组件中使用store中的数据以及方法需要从'mobx-miniprogram-bindings'中引入ComponentWithStore方法
import {
  ComponentWithStore
} from 'mobx-miniprogram-bindings'
// 当入当前组件需要使用的store对象
import numstore from '../..//stores/numstore'
import stores from '../..//stores/stores'
// 需要使用ComponentWithStore方法将Component方法进行替换Component({}) --> ComponentWithStore({})
ComponentWithStore({
  // storeBindings用来配置当前组件需要与哪些store进行关联
  // 注意从store对象中引入方法和数据以后 
  // 在storeBindings中如果是数据会被注入到data中
  // 在storeBindings中如果是方法会被注入到methods中
  // storeBindings对象形式 单个store对象
  storeBindings: {
    // store需要用到的store实例
    store: numstore,
    // fields需要用的数据 包括计算属性 会被注入到data中
    // fields: ['numA', 'numB', 'sum'], // 数组写法
    // actions需要用到的action方法 会被注入到methods中
    // actions: ['update'], // 数组写法
    // fields和actions有两种写法 数组写法  对象写法
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
  // storeBindings数组形式 多个store对象
  // 数组的每个元素都是一个单独的store对象
  storeBindings: [{
      store: numstore,
      fields: ['numA', 'numB', 'sum'],
      actions: ['update']
    },
    {
      store: stores,
      // storeBindings数组写法中如果同个fields变量名或者actions方法名
      // 第一种方法：使用对象写法的映射写法，并修改key名字
      fields: {
        numATwo: 'numA',
        numBTwo: 'numB',
        sumTwo: 'sum'
      },
      actions: {
        updateTwo: 'updateTwo'
      },
      // 第二种方法: 添加namespace命名空间
      // namespace只对fields数据生效
      // 对actions方法不生效，依然得使用对象映射的方式改造
      // 页面使用命名空间里的数据时候需要对应namespace名字.数据使用
      namespace: 'twoStore',
      fields: ['numA', 'numB', 'sum'],
      actions: {
        updateTwoTest: 'updateTwo'
      }
    }
  ],
  data: {
    tzof: 'tzof'
  },
  methods: {
    testFun() {
      console.log(this.data);
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


// 使用storeBindingsBehavior方法，直接在Component内写storeBindings
// import {
//   storeBindingsBehavior
// } from 'mobx-miniprogram-bindings'
// Component({
//   behaviors: [storeBindingsBehavior],
//   storeBindings: {
//     store: numstore, // 需要用到的store对象实例
//     fields: ['numA', 'numB', 'sum'], // 需要用的数据 包括计算属性
//     actions: ['update'] // 需要用到的action方法
//   },
// })