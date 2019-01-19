import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"
/* 让axios默认记住sessionid每次发送请求时都会带上sessionid */
axios.defaults.withCredentials=true
Vue.use(Vuex)

export default new Vuex.Store({
  
  state: {
    address:{},
    isLogin:false, 
    uid:null,
  },
  mutations: {
    setLogin(state){
      state.isLogin=true;
    },
    setLoginout(state){
      state.isLogin=false;
    },
    setUid(state,uid){
      console.log(uid);
      state.uid=uid;
    }
  },
  actions: {
    
  },
  getters:{
  login:state=>{
    return state.isLogin;
  },
  userid:state=>{
    return state.uid;
  }         
  } 
       
   
     

})
