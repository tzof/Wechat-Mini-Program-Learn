import {
  observable,
  action,
} from 'mobx-miniprogram'
const userStores = observable({
  token: '123',
  openId: '',
  userinfo: {},
  setToken: action(function (token) {
    this.token = token;
  }),
  setOpenId: action(function (openId) {
    this.openId = openId
  }),
  setUserinfo: action(function (userinfo) {
    this.userinfo = userinfo
  })
})

export default userStores