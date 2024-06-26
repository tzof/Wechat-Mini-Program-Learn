import numstore from '../..//stores/numstore'
// 小程序页面如果要使用store中的数据或方法，并且继续使用Page或者Component构造方法
// 需要从mobx-miniprogram-bindings中导入BehaviorWithStore方法
import {
  BehaviorWithStore
} from 'mobx-miniprogram-bindings'
// BehaviorWithStore方法的作用就是让页面和store对象建立关联
const behaviorStore = BehaviorWithStore({
  storeBindings: {
    store: numstore, // 需要用到的store对象实例
    fields: ['numA', 'numB', 'sum'], // 需要用的数据 包括计算属性
    actions: ['update'] // 需要用到的action方法
  },
})
export default behaviorStore