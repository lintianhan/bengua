// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import axios from 'axios'
import store from './store'
import 'babel-polyfill'
// import $ from 'jquery'
import '_jquery@3.5.1@jquery/dist/jquery.min.js'
import '_bootstrap@4.5.2@bootstrap/dist/css/bootstrap.min.css'
import '_bootstrap@4.5.2@bootstrap/dist/js/bootstrap.min.js'

Vue.config.productionTip = false
// Vue.prototype.$axios = axios;
/* eslint-disable no-new */
// router.beforeEach((to, from, next) => {
//   if (to.matched.some(res => res.meta.requireAuth)) { // 验证是否需要登陆
//     if (sessionStorage.getItem('sid')) { // 查询本地存储信息是否已经登陆
//       next();
//     } else {
//       next({
//         path: '/', // 未登录则跳转至login页面
//         query: {redirect: to.fullPath} // 登陆成功后回到当前页面，这里传值给login页面，to.fullPath为当前点击的页面
//         });
//     }
//   } else {
//     next();
//   }
// });
const whiteList = ['kong','login']

router.beforeEach((to, from, next) => {
  console.log('kjdkk');
  // 确定用户是否已登录  

  const hasToken = localStorage.getItem('token');  // 这里就是路由是否通过标准，一般都是通过token来验证
  if (hasToken) {   // 登录
    // if (to.path === '/login') {  
    //   // 如果已登录，请重定向到主页
    //   next({ path: '/login' })
    //   return
    // } 
    next()
  } else {
    if (whiteList.indexOf(to.name) !== -1) {
      // 在免费登录白名单中，直接进入
      next()
    } else {
      // 没有访问权限的其他页将重定向到登录页。
      next(`/login`)
    }
  }
})
new Vue({
  el: '#app',
  router,
  // axios,
  store,
  components: { App },
  template: '<App/>'
})

