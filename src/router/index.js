import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
        path: 'product/:producted',
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
