<template>
  <div>
    <!-- 轮播图 -->
      <div class="swipe-banner">
        <van-swipe :autoplay='1500'>
          <van-swipe-item v-for="(item,index) in bannerlist" :key="index">
            <img :src="item.img_url" width="100%">
          </van-swipe-item>
        </van-swipe>
      </div>
    <!-- 推荐商品 -->
    <!-- 楼层 -->
  </div>
</template>

<script>
  export default {
    created(){
      this.getBannerList();
    },
    data(){
      return {
        bannerlist:[],
      }
    },
    methods:{
      /* 获取轮播图方法 */
      getBannerList(){
        /* ajax方法取得轮播图 */
        var url='http://127.0.0.1:3000/bannerlist';
        this.axios.get(url).then(result=>{
          this.bannerlist=result.data;
        })
      }
    }
  }
</script>
  
<style scoped>
  .swipe-banner{
    clear: both;
    width: 20rem;
  }
</style>