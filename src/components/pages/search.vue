<template>
  <div>
   <van-list>
          <van-row gutter="20"><!-- gutter为列元素间距 -->
            <van-col span="12" v-for="( item, index) in list" :key="index">
              <goodsInfo :goods='item' :goodsId="item.pid"></goodsInfo>
            </van-col>
          </van-row>
  </van-list>
  </div>
</template>

<script>
import goodsInfo from '../component/goodsInfoComponent'
  export default {
    data(){
      return {
        list:[],
        keyword:'',
      }
    },
    methods:{

    },
    created(){
     this.keyword=this.$route.params.keyword;
     console.log(this.$route);
     var url='http://127.0.0.1:3000/product/search?keyword='+this.keyword;
     this.axios.get(url).then(res=>{
       if(res.data.code){
         this.list=res.data.data;
       }
     })
    },
    components:{goodsInfo}
  }
</script>

<style scoped>

</style>