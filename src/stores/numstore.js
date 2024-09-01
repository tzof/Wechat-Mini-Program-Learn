import {
  observable,
  action,
} from 'mobx-miniprogram'
// observable用于创建一个被监测的对象 对象的属性就是应用的状态 状态会被自动转化为响应式数据
// action 函数是用来显示的定义action方法，action方法用来修改更新状态

// observable创建store对象 被检测的对象
const numstore = observable({

  // 对象的属性就是应用的状态 状态会被自动转化为响应式数据
  numA: 1,
  numB: 2,
  title: '11111111',

  // action 定义action方法用来修改状态
  // update是方法自定义方法名
  // 注意action中不能使用箭头函数()=>{}因为箭头函数指向触发这个方法的位置也就是page页面或者component组件，只有this指向observable对象才能获取到状态
  update: action(function (str) {
    // 在方法中如果需要获取应用的状态可以使用this获取
    this.numA += 1;
    this.numB -= 1;
    console.log(this.numB,str);
    this.title = str;
  }),

  // computed 计算属性
  // 根据已有的状态产生新的状态
  // 计算属性前面要用get修饰符进行修饰
  get sum() {
    // 计算属性内部必须有返回值
    return this.numA + this.numB;
  }

})

export default numstore