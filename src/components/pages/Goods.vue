<template>
  <div class="goods">
    <div class="nav-bar">
      <van-nav-bar
      title="商品详情"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      >

      </van-nav-bar>
      <div class="topimg">
        <img :src="product.image1" width="100%">
      </div>
      <div class="pname">
        {{product.pname}}
      </div>
      <div class="price">原价：<del>{{product.originPrice | money}}</del>现价：{{product.price |  money}}</div>
      <van-tabs swipeable sticky>
        <van-tab title="商品详情">
          <div class="detail" v-html="product.detail"></div>
        </van-tab>
        <van-tab title="商品评价">暂无评价</van-tab>
      </van-tabs>
      <div class="bottom">
        <van-button size="large" type='primary'>放入购物车</van-button>
        <van-button size="large" type='danger'>直接购买</van-button>
      </div>
    </div>
  </div>
</template>

<script>
  import{Money} from '../../filter/money.js'
  export default {
    data(){
      return{
         goodsId: '775e575ce28a4f89b1dfe2c99eb08ae7',
         product:{},
      }
    },
    created(){
      this.goodsId= this.$route.query.goodsId
     /*  console.log(this.goodsId) */
      this.getGoods()
    }, 
    methods:{
      getGoods(){
        var pid=this.goodsId;
        var params=`pid=${pid}`
        var url='http://127.0.0.1:3000/product/details'
        this.axios.post(url,params).then(res=>{
         this.product=res.data.data[0];
         /* console.log(this.product); */
        })
      },      
      onClickLeft(){
        this.$router.go(-1);
      }
    }
  }
</script>

<style scoped>
  
  .detail{
    font-size: 0px;
  }
  .pname, .price{
    background-color: #fff
  }
  .bottom{
  
    background-color: #FFF;
    width:100%;
    display: flex;
    flex-direction: row;
    flex-flow: nowrap;
  }
</style>