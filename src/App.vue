<template>
  <div id="app">
    <!-- 搜索栏 -->
    <div class="search-bar">
      <van-row>
          <van-col span="3">
            <img :src='icon' class="icon" />
          </van-col>
          <van-col span="16">serach input</van-col>
          <van-col span="5"><button><img src="" ></button> </van-col>
      </van-row>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  data() {
    return {
      icon: require('../src/assets/images/money.png')
    }
  },
}
</script>

<style>
  .search-bar{
    width: 100%;
    height: 2.2rem;
    position: fixed;
    top:10px;
    line-height: 2.2rem;
  }
  .search-bar img.icon{
    width: 100%;
    height: 100%;
    
  }
</style>
