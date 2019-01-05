<template>
  <div>
    <van-cell-group>
       <van-nav-bar
        title="用户注册"
        left-text="返回"
        left-arrow
        @click-left="goBack"
        />
      <van-field v-model="username" required label="用户名"  placeholder="请输入6-10位数字或者字母" :error-message="unameErrorMsg"/>

      <van-field v-model="password"  type="password" label="密码" placeholder="请输入最少8位数字或者字母" required :error-message="upwdErrorMsg"/>
      <div class="register-button">
        <van-button type="primary" size="large" @click="reg()" :loading="isLoading">马上注册</van-button>
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
    methods: {
      goBack(){
        this.$router.go(-1) 
      },
      reg(){
        /* 验证通过执行注册请求 */
        if(this.checkReg()){
          this.isLoading=true;//防止重复点击注册
          var url='http://127.0.0.1:3000/user/reg';
          var username=this.username,password=this.password;
          var params =`username=${username}&password=${password}`

          this.axios.post(url,params).then(res=>{
            if(res.data.code==1){
              Toast.success('注册成功')
              this.$router.push('/');//跳转到个人中心
            }else{
              Toast.fail('注册失败')
              this.isLoading=false;
            };
          })
          /* 验证失败不执行 */
        }else{
          return;
        }
        
      },
      checkReg(){
        let isOk=false;
        var unameReg=new RegExp(/^[a-z0-9A-Z]{6,10}$/);
        var upwdReg=new RegExp(/^[a-z0-9A-Z]{8,}$/);
        if(!unameReg.test(this.username)){
          this.unameErrorMsg='用户名必须是6至10位数字或字母'
          
        }
        if(!upwdReg.test(this.password)){
          this.upwdErrorMsg='密码必须是8位以上数字或字母'
        }
        if(unameReg.test(this.username)&&upwdReg.test(this.password)) {
          isOk=true;
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