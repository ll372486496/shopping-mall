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
      chosenAddressId: '',
      list: [],
      uid:2,
    }
  }, 
    created() {
      var url='http://127.0.0.1:3000/user/getaddress?uid='+this.uid;
      this.axios.get(url).then(res=>{
        this.list=res.data;
        console.log(this.list)
        for(var item of this.list){
          if(item.isselected){
            this.chosenAddressId=item.id;
          }
        }
      })
    },
  methods: {
    onAdd() {
      this.$router.push('/Profile/AddAddress')
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