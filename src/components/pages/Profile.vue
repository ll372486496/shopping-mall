<template>
  <div>
    <van-nav-bar
      title="个人中心"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    >
    </van-nav-bar>
    <van-cell title="收货地址" value='管理我的收货址' is-link to="/Profile/Address" />
    <van-cell title="优惠卷" value='管理我的优惠卷' is-link to="/Profile/Coupon" />
    <van-cell title="投诉建议" value='去联系客服' is-link to="/" />
  </div>
  
</template>

<script>
  export default {
    methods:{
      onClickLeft(){
        this.$router.go(-1);
      }
    }
  }
</script>

<style scoped>

</style>