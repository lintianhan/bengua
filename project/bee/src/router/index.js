import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import home from '@/components/home'
import heade from '@/components/heade'
import ss from '@/components/ss'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/home',
      name: 'home',
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
    },
      component: home,
      children: [{
        path: '/heade',
        name: 'heade',
      //   meta: {
      //     requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      // },
        component: heade,
      }]
    },
    {
      path: '/ss',
      name: 'ss',
      component: ss,
    },
  ]
})
