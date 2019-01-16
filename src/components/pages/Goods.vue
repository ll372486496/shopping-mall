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
      <van-tabs swipeable sticky color='#1989fa'>
        <van-tab title="商品详情">
          <div class="detail" v-html="product.detail"></div>
        </van-tab>
        <van-tab title="商品评价">暂无评价</van-tab>
      </van-tabs>
      <div class="bottom">
        <van-button size="large" type='primary' @click="showpop">放入购物车</van-button>
        <van-button size="large" type='danger'>直接购买</van-button>
        <van-popup v-model="show" position="bottom">

          <van-stepper v-model="count" :disable-input=' isinput' size='large'/>
          <van-button @click="addcart" size='large' type="primary">确定</van-button>
        </van-popup>
      </div>
    </div>
  </div>
</template>

<script>
  import{Money} from '../../filter/money.js'
  import { Toast } from 'vant'
  export default {
    data(){
      return{
         goodsId: '775e575ce28a4f89b1dfe2c99eb08ae7',
         product:{},
         show:false,     
         count:1,   
         isinput:true, 
         uid:1,
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
      },
      showpop(){
        this.show=true;
      },
      addcart(){
       var url='http://127.0.0.1:3000/user/addcart?';
       var params=`pid=${this.goodsId}&uid=${this.uid}&count=${this.count}`;
       this.axios.get(url+params).then(res=>{
         if(res.data.code==1){
           Toast.success('添加成功')
           this.show=false;
         }else{
           Toast.fail('此商品已存在')
           this.show=false;
         }
       })
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
  .van-popup{
    height: 100px;
  }
  
</style>