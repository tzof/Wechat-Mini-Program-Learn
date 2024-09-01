// 自定义封装axios 请求工具
import {
  axiosWx
} from './api'

export const setUserinfo = (params) => {
  return axiosWx('POST', '/getUserinfo', params);
};