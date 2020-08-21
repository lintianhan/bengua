// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import heade from '@/components/heade'
import left from '@/components/left'
import Antd from 'ant-design-vue';
import Button from "ant-design-vue/lib/button";
import Layout from "ant-design-vue/lib/layout";
import "ant-design-vue/dist/antd.css";
// import { Button } from 'ant-design-vue';
import './assets/css/all.css'
import 'babel-polyfill'
import '_jquery@3.5.1@jquery/dist/jquery.min.js'
import '_bootstrap@4.5.2@bootstrap/dist/css/bootstrap.min.css'
import '_bootstrap@4.5.2@bootstrap/dist/js/bootstrap.min.js'

Vue.component('heade', heade);
Vue.component('left', left);
Vue.use(Antd);
Vue.component(Button.name, Button);
Vue.component(Layout.name, Layout);
Vue.config.productionTip = false

const whiteList = ['login']

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
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  heade,
  left,
  components: { App },
  template: '<App/>'
})
