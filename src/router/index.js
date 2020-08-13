import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/common/dashboard'
import Login from '@/components/login'
import login from '@/components/login'
import kong from '@/components/kong'
import Home from '@/components/home'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/kong',
      name: 'kong',
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
    },
      component: kong
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      children: [{
        path: '/home',
        name: 'home',
      //   meta: {
      //     requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      // },
        component: Home,
      }]
    }
  ]
})
