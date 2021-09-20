import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/license',
    name: 'license',
    component: () => import('../views/License.vue')
  },
  {
    path: '/travel',
    name: 'travel',
    component: () => import('../views/Travelboard.vue'),
    children:[
      {
        path:'north',
        component:() => import('../views/TravelNorth.vue')
      },
      {
        path:'guishanIsland',
        component:() => import('../views/TravelGuishanIsland.vue')
      },
      {
        path:'kenting',
        component:() => import('../views/TravelKenting.vue')
      },
      {
        path:'xiaoLiuqiu',
        component:() => import('../views/TravelXiaoLiuqiu.vue')
      },
      {
        path:'greenIsland',
        component:() => import('../views/TravelGreenIsland.vue')
      },
      {
        path:'lanyu',
        component:() => import('../views/TravelLanyu.vue')
      }
    ]
  },

  {
    path: '/dashboard',
    component: () => import('../views/Dashboard.vue'),
    children:[
      {
        path: 'products',
        component: () => import('../views/Products.vue')
      },
      {
        path: '/login',
        component: () => import('../views/Login.vue')
      },
    ]
  },
  {
    path: '/user',
    component: () => import('../views/Userboard.vue'),
    children:[
      {
        path: 'item',
        component: () => import('../views/UserItem.vue')
      },
      {
        path: 'cart',
        component: () => import('../views/UserCart.vue')
      },
      {
        path: 'product/:productId',
        component: () => import('../views/UserProduct.vue')
      },
      {
        path: 'checkout/:orderId',
        component: () => import('../views/UserCheckOut.vue')
      }
    ]
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
