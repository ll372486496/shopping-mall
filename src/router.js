import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Cart from './components/pages/Cart'
import Profile from './components/pages/Profile'
import CategoryList from './components/pages/CategoryList'
Vue.use(Router)

export default new Router({
  routes: [
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
    }

  ]
})
