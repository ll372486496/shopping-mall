<template>
  <div class="goods-info" @click="goGoodsPage()">
    <div class="goods-img">
      <img :src="goods.pic"  width="90%">
    </div>
    <div class="goods-name">{{goods.pname}}</div>
    <div class="goods-price">
      原价：<del>{{goods.originPrice}}</del>
    </div>
    <div class="goods-price">现价：{{goods.price}}</div>
  </div>
</template>

<script>
  export default {
    props:['goods','goodsId'],
    filter:{},
    data(){
      return{
        image:'',
        name:'',
        orginPrice:0,
        price:0
      }
    },
    methods:{
      goGoodsPage(){
       
        this.$router.push({name:'Goods',query:{goodsId:this.goodsId}})
      }
    },
    created(){
       /* console.log(this.goodsId); */
    },
    watch:{
      goods:function(val){
        
        this.name=this.goods.name;
        this.image=this.goods.image;
        this.orginPrice=this.goods.orginPrice;
        this.price=this.goods.price;
        /* console.log( this.name,this.image,this.orginPrice,this.price); */
      }
    }
  }
</script>

<style scoped>
   .goods-name{
        padding: 0 8px;
       overflow: hidden;
       text-overflow: ellipsis;
       white-space:nowrap; 
    }
</style>