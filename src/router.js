import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Cart from './components/pages/Cart'
import Profile from './components/pages/Profile'
import CategoryList from './components/pages/CategoryList'
import Register from '@/components/pages/Register'
import Login from '@/components/pages/Login'
import Goods from '@/components/pages/Goods'
import Address from '@/components/pages/Address'
import Coupon from '@/components/pages/Coupon'
import AddAddress from '@/components/pages/AddAddress'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Cart',
      name: 'Cart',
      component: Cart
    },
    {
      path:'/Address',
      component:Address,
      name:'Address'
   },
   {
    path:'/Coupon',
    component:Coupon,
    name:'Coupon'
   },
    {
      path: '/Profile',
      name: 'Profile',
      component: Profile,
      
    },
    {
      path:'/AddAddress',
      name:'AddAddress',
      component:AddAddress
    },
    {
      path: '/CategoryList',
      name: 'CategoryList',
      component: CategoryList
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Goods',
      name: 'Goods',
      component: Goods
    }

  ]
})
