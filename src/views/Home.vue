
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
    <!-- 分类 -->
    <div class="type-bar">
     
      <div  v-for="(cate,index) in category" :key="index" >
         <router-link to='/CategoryList'>
            <img :src="cate.img_url" />
            <span>{{cate.cname}}</span>
         </router-link> 
      </div>
    
    </div>
    <!-- 推荐商品 -->
    <div class="recommend-area">
      <div class="recommend-title">
          商品推荐
      </div>
      <div class="recommend-body">
        <swiper :options="swiperOption">
          <swiper-slide v-for=" (item ,index) in recommend" :key="index">
            <div class="recommend-item">
                <img :src="item.img_url" width="80%"  />
                <div>{{item.pname}}</div>
                <div> 原价￥<del>{{item.originPrice}}</del> 现价￥{{item.price|money}}</div>
            </div>
          </swiper-slide>
        </swiper>
       
      </div>
    </div>
    <!-- 楼层 -->
    <floorComponent :floorData='f1'></floorComponent>
    <floorComponent :floorData='f2'></floorComponent>
    <floorComponent :floorData='f3'></floorComponent>
    <!-- 热卖商品 -->
    <div class="hot">
      <div class="title">热卖商品</div>
      <div class="hot-goods">
        <!-- 商品组件 -->
        <van-list>
          <van-row gutter="20"><!-- gutter为列元素间距 -->
            <van-col span="12" v-for="( item, index) in hotGoods" :key="index">
              <goodsInfo :goods='item' :goodsId="item.goodsId"></goodsInfo>
            </van-col>
          </van-row>
        </van-list>
      </div>
    </div>
  </div>
</template>

<script>
import floorComponent from '../components/component/floorComponent'
import goodsInfo from '../components/component/goodsInfoComponent'
import { Toast } from 'vant'
  export default {
    created(){
      this.getBannerList();
      this.getCategory();
      this.getRecommend();
      this.getFloors();
      this.getHots();
    },
    data(){
      return {
        bannerlist:[],
        category:null,
        recommend:[],
        f1:null,
        f2:null,
        f3:null,
        hotGoods:[],
        swiperOption:{
          slidesPerView:3
        },
      }
    },
    methods:{
      /* 获取轮播图数据 */
      getBannerList(){
        /* ajax方法取得轮播图 */
        var url='http://127.0.0.1:3000/bannerlist';
        this.axios.get(url).then(result=>{
          this.bannerlist=result.data;
        })
      },
      /* 获取分类数据 */
      getCategory(){
        var url='http://127.0.0.1:3000/categroylist';
        this.axios.get(url).then(res=>{
         /*  console.log(res.data); */
          this.category=res.data;
        })
      },
      /* 获取推荐数据 */
      getRecommend(){
        var url='http://127.0.0.1:3000/recommend';
        this.axios.get(url).then(res=>{
          /* console.log(res.data); */
          this.recommend=res.data;
        })
      },
      /* 获取楼层数据 */
      getFloors(){
        var url='http://127.0.0.1:3000/floors';
        this.axios.get(url).then(res=>{
          this.f1=res.data.floor1;
          this.f2=res.data.floor2;
          this.f3=res.data.floor3;
          /* console.log(this.floors); */
        });
        
      },
      getHots(){
        var url='http://127.0.0.1:3000/hots';
        this.axios.get(url).then(res=>{
          this.hotGoods=res.data;
          /* console.log(this.hotGoods); */
        });

      }
    },
    components:{floorComponent,goodsInfo}
  }
</script>
  
<style scoped>
  .swipe-banner{
    clear: both;
    width: 20rem;
  }
  .type-bar{
     
      background-color: #fff;
      margin:0 .3rem .3rem .3rem;
     
      font-size:12px;
      display: flex;
      flex-direction:row;
      flex-wrap:nowrap;
  }
  .type-bar div{

      font-size: 12px;
      text-align: center;
      border-radius: .3rem;
  }
  .type-bar div img{
    width: 3.9rem;
    height: 3.9rem;
  }
  .recommend-area{
       background-color: #fff;
       margin-top: .3rem;
  }
  .recommend-title{
      border-bottom:1px solid #ccc;
      font-size:14px;
      padding:.2rem;
      color:#e5017d;
  }
  .recommend-body{
       border-bottom: 1px solid #eee;
   }
  .recommend-item{
      width:99%;
      border-right: 1px solid #eee;
      font-size: 12px;
      text-align: center;
  }
  .hot{
    text-align: center;
    font-size: 14px;
    height: 1.8rem;
    line-height: 1.8rem
  }
</style>