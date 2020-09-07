import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import home from '@/components/home'
import heade from '@/components/heade'
import ss from '@/components/ss'
import bawuyi from '@/components/bawuyi'
import Upload from '@/components/Upload'
import getlist from '@/components/getlist'
import bujv from '@/components/bujv'
import news from '@/components/news'
import edit from '@/components/edit'
import add from '@/components/add'
import dictionary from '@/components/dictionary'
import getnews from '@/components/getnews'
import areaCode from '@/components/areaCode'
import advert from '@/components/advert'
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
    {
      path: '/bawuyi',
      name: 'bawuyi',
      component: bawuyi,
    },
    {
      path: '/Upload',
      name: 'Upload',
      component: Upload,
    },
    // {
    //   path: '/getlist',
    //   name: 'getlist',
    //   component: getlist,
    // },
    {
      path: '/news/add',
      name: 'add',
      component: add,
    },
    {
      path: '/bujv',
      name: 'bujv',
      component: bujv,
      children: [{
        path: '/carMedel',
        name: 'getlist',
        //   meta: {
        //     requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
        // },
        component: getlist,
      },
      {
        path: '/news/detail',
        name: 'getnews',
        component: getnews,
      },
      {
        path: '/advert',
        name: 'advert',
        component: advert,
      },
      {
        path: '/dictionary',
        name: 'dictionary',
        component: dictionary,
      },
      {
        path: '/areaCode',
        name: 'areaCode',
        component: areaCode,
      },
      {
        path: '/news/edit',
        name: 'edit',
        component: edit,
      },
      {
        path: '/news',
        name: 'news',
        component: news,
        
      }]

    },
  ]
})
