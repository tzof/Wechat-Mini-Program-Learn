// components/customCheckbox/customCheckbox.js
Component({
  options: {
    // multipleSlots 启用多个slot插槽支持
    multipleSlots: true
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
    isChecked: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onClickCheck() {
      this.setData({
        // isChecked: !this.data.isChecked
        // 在组件内部也可以修改properties中的数据，一般不建议子组件内修改
        // label: '测试修改父传子的值'
      })
      console.log(this.data.isChecked);
      // 获取properties中的数据要加.properties
      console.log(this.properties.label);
    }
  }
})