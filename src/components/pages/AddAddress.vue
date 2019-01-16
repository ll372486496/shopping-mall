<template>
  <div>
     <van-nav-bar
      title="请添加收货地址"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      >

      </van-nav-bar>
    <van-address-edit
  :area-list="areaList"
  show-postal
  show-delete
  show-set-default
 
  
  @save="onSave"
  @delete="onDelete"
  
/>
  </div>
</template>

<script>
  import AreaList from './area';
  import qs from 'qs';
  export default {
  data() {
    return {
      uid:1,
      areaList:AreaList,
      searchResult: []
    }
  },

  methods: {
    onSave(content) {
      var url='http://127.0.0.1:3000/user/addAddress';
      content.uid=this.uid;
      this.axios.post(url,qs.stringify(content)).then(res=>{
        console.log(res)
      });
    },
    onDelete() {
      Toast('delete');
    },
    
    onClickLeft(){
      this.$router.go(-1);
    }
  }
}
</script>

<style scoped>

</style>