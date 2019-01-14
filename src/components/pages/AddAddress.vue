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
  show-search-result
  :search-result="searchResult"
  @save="onSave"
  @delete="onDelete"
  @change-detail="onChangeDetail"
/>
  </div>
</template>

<script>
  import AreaList from './area';
  export default {
  data() {
    return {
      areaList:AreaList,
      searchResult: []
    }
  },

  methods: {
    onSave() {
      Toast('save');
    },
    onDelete() {
      Toast('delete');
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [{
          name: '黄龙万科中心',
          address: '杭州市西湖区'
        }];
      } else {
        this.searchResult = [];
      }
    },
    onClickLeft(){
      this.$router.go(-1);
    }
  }
}
</script>

<style scoped>

</style>