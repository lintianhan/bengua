import axios from 'axios'
// import router from '../router'
// 引入路由是为了做重定向，比如没有登录过期定向到登录页面
// 创建axios实例
const instance = axios.create({
  baseURL: 'http://221.215.103.126:7777/v1/api/', // api的base_url
  timeout: 15000,
  headers: {
    'content-type': 'application/json;charset=UTF-8',
    'token':localStorage.getItem("token"),
    'lang': 'zh-CN'
  }
})

// 拦截请求
instance.interceptors.request.use(config => {
  // if (config.url.indexOf('login') !== -1){
  //   config.headers
  // }else{
  // }
  //  可以在此处添加 token
  // token:'aaa'
  return config
}, error => {
  return Promise.reject(error)
})
// 拦截响应
instance.interceptors.response.use(res => {
  // const a = res;
  // a.data.allMessages = 'jjj';
  // 可以在此处拦截接口错误
  return res
}, error => {
  return Promise.reject(error)
})
export default instance
