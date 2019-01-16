import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
/* 引入vant,单独引入其css文件 */
import Vant from 'vant'
import 'vant/lib/index.css'
Vue.use(Vant)
/* 引入axios库 */
import axios from "axios"
/* 让axios默认记住sessionid每次发送请求时都会带上sessionid */
axios.defaults.withCredentials=true
/* 将axios注册到Vue */
Vue.prototype.axios=axios
Vue.config.productionTip = false
/* 引入vue-awesome-swiper */
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)
/* 引入money过滤器 */
import{money} from './filter/money'
Vue.filter('money',money);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
