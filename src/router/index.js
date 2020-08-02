import Vue from 'vue'
import Router from 'vue-router'
import product from '@/components/product'
import user from '@/components/user'
import kuai from '@/components/kuai'
import order from '@/components/order'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'kuai',
      component: kuai
    },
    {
      path: '/user',
      name: 'user',
      component: user
    },
    {
      path: '/product',
      name: 'product',
      component: product
    },
    {
      path: '/order',
      name: 'order',
      component: order
    }
  ]
})
