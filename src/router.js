import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Cart from './components/pages/Cart'
import Profile from './components/pages/Profile'
import CategoryList from './components/pages/CategoryList'
import Register from '@/components/pages/Register'
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
      path: '/Profile',
      name: 'Profile',
      component: Profile
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
    }

  ]
})
