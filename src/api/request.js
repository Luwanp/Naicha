// request.js 封装

import axios from "axios";
import qs from "qs";


var host = 'http://yuandian.pzhkj.cn/';



// 创建axios实例 
const http = axios.create({
  // baseURL  公共接口路径
  baseURL: host,
  // timeout 超时时间
  timeout: 5000
});
// 请求拦截器
http.interceptors.request.use(
  config => {
    //   if (user) {
    // 	config.headers.common['Xshop-Token'] = user.token;
    // }else{
    // 	return config;
    // }


    if (config.method.toLowerCase() == 'post') {
      config.data = qs.stringify(config.data, {
        arrayFormat: 'repeat',
        allowDots: true
      })
    } else {
      //
      config.params = config.data
    }
    return config
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)

// 响应拦截器
http.interceptors.response.use(
  response => {
    const res = response.data
    return res
  },
  error => {
    console.log('err' + error)
    return Promise.reject(error)
  }
)


export default http