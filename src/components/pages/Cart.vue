<template>
  <div>
    <div>
    <van-nav-bar
      title="购物车"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    > 
    </van-nav-bar>
    </div>
    <van-checkbox-group class="card-goods" v-model="checkedGoods">
      <van-checkbox
        class="card-goods__item"
        v-for="(item) in cartList"
       
        :key="item.pid"
        :name="item.pid"
        
      >
     
        <van-card
          :title="item.pname"
         
          :num="item.count"
          :price="item.price"
          :thumb="item.pic"
        />
      </van-checkbox>
    </van-checkbox-group>
    
    <van-submit-bar
     :price="totalPrice"
     :button-text="submitBarText"
     :disabled="!checkedGoods.length"
    >
      <van-checkbox v-model="allChecked" @change='handlechange'>全选</van-checkbox>
      
    </van-submit-bar>

  </div>
</template>

<script>
  export default {
    created(){
      if(this.$store.getters.login){
        this.uid=this.$store.getters.userid;
        console.log(this.uid);
        this.getCartItem()
      }else{
         this.$router.push('/login')
      }
     
      
    },
    data(){
      return{
        cartList:[],
        isEmpty:false,
        uid:1,
        checkedGoods:[],
        allChecked:false,
       
      }
    },
    methods:{
      getCartItem(){
        var url='http://127.0.0.1:3000/cartItem?uid='+this.uid;
        this.axios.get(url).then(res=>{
          if(res.data.code<0){
            this.isEmpty=true;
          }else{
            this.isEmpty=false;
            console.log(res.data.data);
            this.cartList=res.data.data;
            for( var item of this.cartList){
              item.selected=true;
              this.checkedGoods.push(item.pid);
            }
            console.log( this.checkedGoods);
          }
          
          
        })
      },
      onClickLeft(){
        this.$router.go(-1);
      },
      handlechange(val){
       if(val){
         this.checkedGoods=[];
        for( var item of this.cartList){
          item.selected=true;
          this.checkedGoods.push(item.pid);
        }
       }else{
         if(this.checkedGoods.length==this.cartList.length){
           this.checkedGoods=[];
         }
         
       }
      }
     
    },
    computed:{
      totalPrice(){
        /* console.log(this.cartList.length)
        console.log(this.checkedGoods.length) */
        var total=0;
        for(var item of this.cartList){
          if(this.checkedGoods.indexOf(item.pid)!=-1){

          /*   console.log(item); */
            total+=Number(item.price)*item.count;
          }
        }
       /*  console.log(total) */
        return total*100;
        
      },
      submitBarText(){
        return `结算(${this.checkedGoods.length})`
      }
    },
    watch:{
      checkedGoods(){
        
        if(this.checkedGoods.length==this.cartList.length){
          this.allChecked=true;
        }else{
          this.allChecked=false;
        }
      },
     
      
    }
  }
</script>

<style scoped>
  .card-goods {
  padding: 10px 0;
  background-color: #fff;
  }
  .card-goods__item{
     position: relative;
    background-color: #fafafa;
  }
</style>