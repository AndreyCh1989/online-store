import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Cart from '../components/Cart'
import Checkout from '../components/Checkout'
import Product from '../components/Product'
import SinglePage from '../components/SinglePage'
import '../assets/css/css.css'
import '@fortawesome/fontawesome-free/css/all.css'
import 'lato-font/css/lato-font.css'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/product',
      name: 'Product',
      props: true,
      component: Product
    },
    {
      path: '/checkout',
      name: 'Checkout',
      component: Checkout
    },
    {
      path: '/single_page',
      name: 'SinglePage',
      component: SinglePage
    }
  ]
})
