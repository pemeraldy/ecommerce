import Vue from 'vue'
import VueRouter from 'vue-router'
import Store from '../views/Store.vue'
import Checkout from '../views/Checkout.vue'
import Message from '../views/Message.vue'
import ProductDetails from '../views/ProductDetails.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Store',
    component: Store
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout
  },
  {
    path: '/product',
    name: 'Product',
    component: ProductDetails
  },
  {
    path: '/message',
    name: 'Message',
    component: Message
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
