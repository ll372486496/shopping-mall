<template>
  <div class="goods-info">
    <div class="goods-img">
      <img :src="goods.image"  width="90%">
    </div>
    <div class="goods-name">{{goods.name}}</div>
    <div class="goods-price">
      原价：<del>{{goods.originPrice}}</del>
    </div>
    <div class="goods-price">现价：{{goods.price}}</div>
  </div>
</template>

<script>
  export default {
    props:['goods'],
    data(){
      return{
        image:'',
        name:'',
        orginPrice:0,
        price:0
      }
    },
    watch:{
      goods:function(val){
        console.log(1+this.goods);
        this.name=this.goods.name;
        this.image=this.goods.image;
        this.orginPrice=this.goods.orginPrice;
        this.price=this.goods.price;
        console.log( this.name,this.image,this.orginPrice,this.price);
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