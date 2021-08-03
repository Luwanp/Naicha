import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [

   {
    path: '/',
    name: 'home',
    component: () => import('@/views/home.vue')

    ,meta:{
      id:0
    }
  },
  {
    path: '/meal',
    name: 'meal',
    component: () => import('@/views/meal.vue')
    ,meta:{
      id:1
    }
  },
  {
    path: '/my',
    name: 'my',
    component: () => import('@/views/my.vue')
    ,meta:{
      id:3
    }
  },
  {
    path: '/order',
    name: 'order',
    component: () => import('@/views/order.vue')
    ,meta:{
      id:2
    }
  },
  {
    path: '/orderInfo',
    name: 'order',
    component: () => import('@/views/orderInfo.vue')
    ,meta:{
      id:2
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}


export default router
