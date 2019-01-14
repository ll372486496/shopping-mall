<template>
  <div>
     <van-nav-bar
      title="商品详情"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      >

      </van-nav-bar>
    <div v-for="i of 100" :key="i">优惠卷</div>
    
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