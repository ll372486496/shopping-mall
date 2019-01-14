<template>
  <div>
     <van-nav-bar
      title="请选择收货地址"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      >

      </van-nav-bar>
   <van-address-list
  v-model="chosenAddressId"
  :list="list"
  
  @select="onSelect"
  @add="onAdd"
  @edit="onEdit"
  />
  </div>
</template>

<script>
  export default {
    data() {
    return {
      chosenAddressId: '1',
      list: [
        {
          id: '1',
          name: '张三',
          tel: '13000000000',
          address: '湖南省长沙市雨花区侯家塘佳天国际28楼'
        },
        {
          id: '2',
          name: '李四',
          tel: '1310000000',
          address: '湖南省长沙市雨花区东塘中机国际11楼'
        }
      ],
      
    }
  },

  methods: {
    onAdd() {
      this.$router.push('/AddAddress')
    },
    onSelect(item, index){
      console.log(item)
    },
    onEdit(item, index) {
     console.log(item)
    },
    onClickLeft(){
        this.$router.go(-1);
    }
  }
  }
</script>

<style scoped>

</style>