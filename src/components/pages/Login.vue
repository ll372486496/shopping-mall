<template>
  <div>
    <van-cell-group>
       <van-nav-bar
        title="用户登录"
        left-text="返回"
        left-arrow
        @click-left="goBack"
        />
      <van-field v-model="username" required label="用户名"  placeholder="请输入用户名" :error-message="unameErrorMsg"/>

      <van-field v-model="password"  type="password" label="密码" placeholder="请输入密码" required :error-message="upwdErrorMsg"/>
      <div class="register-button">
        <van-button type="primary" size="large" @click="login()" :loading="isLoading">马上登录</van-button>
      </div>
    </van-cell-group>
  </div>
</template>

<script>
import { Toast } from 'vant'
  export default {
    data(){
      return{
        username:'',
        password:'',
        isLoading:false,
        unameErrorMsg:'',
        upwdErrorMsg:'',
      }
    },
     created(){
    
      if(this.$store.getters.login){
       
        Toast.success('您已经登录')
        this.$router.push('/')
      }
     },
    
    methods: {
      goBack(){
        this.$router.go(-1) 
      },
      login(){
        /* 验证通过执行登录请求 */
        if(this.check()){
          this.isLoading=true;//防止重复点击注册
          var url='http://127.0.0.1:3000/user/login';
          var username=this.username,password=this.password;
          var params =`username=${username}&password=${password}`

          this.axios.post(url,params).then(res=>{
            if(res.data.code==1){
              this.isLoading=false;
              this.$store.commit('setLogin');
              this.$store.commit('setUid',res.data.uid);
              Toast.success('登录成功');
              this.$router.push('/');
              }else{
              Toast.fail('账号密码错误')
              this.isLoading=false;
            };
          })
          /* 验证失败不执行 */
        }else{
          
          return;
        }
        
      },
      check(){
        let isOk=false;
       
        
        if(this.username.trim()!=''&&this.password.trim()!='') {
          isOk=true;
          return isOk;
        }else{
          if(this.username.trim()=='') this.unameErrorMsg="用户名不能为空";
          if(this.password.trim()=='') this.upwdErrorMsg="密码不能为空";
          return isOk;
        }
      }
    },
  }
</script>

<style scoped>
  .register-button{
    padding-top: 10px
  }
</style>