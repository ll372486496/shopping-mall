<template>
  <div class="list">
    分类页
  </div>
</template>

<script>
  export default {
    created(){
      this.getCategoryList();
      this.getSubList()
    },
    data(){
      return{
        categoryList:[],
        subList:[]
      }
    },
    methods:{
      getCategoryList(){
        var url='http://127.0.0.1:3000/clist';
        this.axios.get(url).then(res=>{
         
          this.categoryList=res.data;
        })
      },
      getSubList(){
        var url='http://127.0.0.1:3000/sublist';
        this.axios.get(url).then(res=>{
         
          this.subList=res.data;
        })
      }
    }
  }
</script>

<style scoped>
  
</style>