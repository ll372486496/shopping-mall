<template>
  <div>
    产品详情
  </div>
</template>

<script>
  export default {
    data(){
      return{
         goodsId: '775e575ce28a4f89b1dfe2c99eb08ae7',
         product:{},
      }
    },
    created(){
      this.goodsId= this.$route.query.goodsId
      console.log(this.goodsId)
      this.getGoods()
    }, 
    methods:{
      getGoods(){
        var pid=this.goodsId;
        var params=`pid=${pid}`
        var url='http://127.0.0.1:3000/product/details'
        this.axios.post(url,params).then(res=>{
         this.product=res.data.data;
        })
      }
    }
  }
</script>

<style scoped>

</style>