<template>
  <div id="app">
    <!-- 搜索栏 -->
    <div class="search-bar">
      <van-row>
          <van-col span="3">
            <img :src='icon' class="icon" width="80%"/>
          </van-col>
          <van-col span="16">
            <input type="text" class="search-input">
          </van-col>
          <van-col span="5">
            <van-button size="mini">
              查找
            </van-button> 
          </van-col>
      </van-row>
    </div>
    <router-view/>
    <!-- tabbar -->
    <van-tabbar v-model="active" @change="changeTabbar(active)">
            <van-tabbar-item icon="shop">首页</van-tabbar-item>
            <van-tabbar-item icon="records">列表页</van-tabbar-item>
            <van-tabbar-item icon="cart">购物车页</van-tabbar-item>
            <van-tabbar-item icon="contact" info="20">会员中心</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      icon: require('../src/assets/images/money.png'),
      active: 0
    }
  },
  methods: {
    changeTabbar(active) {
               /*  console.log(active) */
                switch(active){
                    case 0:
                        this.$router.push({name:'Home'})
                        break;
                    case 1:
                        this.$router.push({name:'CategoryList'})
                        break;
                    case 2:
                        this.$router.push({name:'Cart'})
                        break;
                    case 3:
                        this.$router.push({name:'Profile'})
                        break;
                }
            }
  },
}
</script>

<style>
  .search-bar{
      height: 2.2rem;
      background-color: #0066FF;
      line-height:2.2rem;
  }
  .search-input{
      width:100%;
      height: 1.3rem;
      border-top:0px;
      border-left:0px;
      border-right:0px;
      border-bottom: 1px solid 1px !important ;
      background-color: #0066FF;
      color:#fff;
  }
  .icon{
      padding-top: .2rem !important;
      padding-left: .3rem !important;
  }
  .vbtn{

    border-radius: 50%!important;;
  }
</style>
