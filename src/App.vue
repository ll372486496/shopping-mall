<template>
  <div id="app">
    <!-- 搜索栏 -->
    <div class="search-bar">
      <van-row>
          <van-col span="3">
            <img :src='icon' class="icon" width="80%"/>
          </van-col>
          <van-col span="16">
            <input type="text" class="search-input"  @keyup.13="gosearch($event)" v-model="input">
          </van-col>
          <van-col span="5">
            <van-button size="mini" @click="search()">
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
      active: 0,
      keyword:'',
      input:'',
      nowPath:'',
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
            },
    changeActive(){
      this.nowPath=this.$route.path;
      switch(this.nowPath){
        case '/':
        this.active=0
        break;
        case '/CategoryList':
        this.active=1
        break;
        case '/Cart':
        this.active=2
        break; 
        case '/Profile/':
        this.active=3
        break;
      }
    },
    search(){
      this.$router.push('/Search/'+this.input.trim());
      console.log(this.nowPath.substring(0,7));
      if(this.nowPath.substring(0,7)=='/Search'){
       this.$router.go(0);
      }
    },
    gosearch(){
    if(this.input.trim()){
     this.search();
    };
  },

  },
  created(){
   this.changeActive()
  },
  updated(){
    this.changeActive()
  }
  
 
}
</script>

<style>
  #app{
    overflow-x: hidden;
    padding-top: 40px;
    padding-bottom: 60px;
  }
  .search-bar{
      height: 2.2rem;
      background-color: #1989fa;
      line-height:2.2rem;
      position:fixed;
      top:0;
      left: 0;
      z-index: 999;
  }
  .search-input{
      width:100%;
      height: 1.3rem;
      border-top:0px;
      border-left:0px;
      border-right:0px;
      border-bottom: 1px solid 1px !important ;
      background-color: #1989fa;
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
