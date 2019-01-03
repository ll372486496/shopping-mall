<template>
  <div>
    <van-cell-group>
       <van-nav-bar
        title="用户注册"
        left-text="返回"
        left-arrow
        @click-left="goBack"
        />
      <van-field v-model="username" required label="用户名"  placeholder="请输入用户名"/>

      <van-field v-model="password"  type="password" label="密码" placeholder="请输入密码" required />
      <div class="register-button">
        <van-button type="primary" size="large" @click="reg()">马上注册</van-button>
      </div>
    </van-cell-group>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        username:'',
        password:''
      }
    },
    methods: {
      goBack(){
        this.$router.go(-1) 
      },
      reg(){
        var url='http://127.0.0.1:3000/user/reg';
        var username=this.username,password=this.password;
        var params =`username=${username}&password=${password}`

        this.axios.post(url,params).then(res=>{
          console.log(res);
        })
      }
    },
  }
</script>

<style scoped>
  .register-button{
    padding-top: 10px
  }
</style>