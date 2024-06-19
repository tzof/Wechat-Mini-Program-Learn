// 类似于mixins
const behavi = Behavior({
  properties: {
    title: String
  },
  lifetimes: {
    attached() {
      console.log('加载完成!!!!!!');
    }
  }
})
export default behavi;