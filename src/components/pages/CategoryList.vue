<template>
  <div>
   <div class="navbar">
     <van-nav-bar   title="类别列表" />
     <van-row>

      <van-col span="6">
        <div id="leftNav">
          <div id="leftNav">
            <ul>
              <li v-for="(item,index) in categoryList" :key="index" @click="clickCategory(index,item.cid)" :class="{categoryActive:categoryIndex==index}">
                {{item.cname}}
              </li>
            </ul>
          </div>
        </div>
      </van-col>

      <van-col span="18">
        <div class="tabCategorySub">
          <van-tabs @click="clickSub" v-model="active">
            <van-tab v-for="(item, index) in subList" :key="index" :title="item.sname">
              <div id="list-div">
                <van-list >
                  <van-row gutter="20"><!-- gutter为列元素间距 -->
                    <van-col span="12" v-for="( product, index) in  goodsList" :key="index">
                      <goodsInfo :goods='product' :goodsId="product.pid"></goodsInfo>
                    </van-col>
                    </van-row>
                </van-list>
              </div>
            </van-tab>
          </van-tabs>
        </div>
      </van-col>
    </van-row>
   </div>
  </div>
</template>

<script>
  import goodsInfo from '../component/goodsInfoComponent'
  export default {
    created(){
      this.getCategoryList();
      this.getSubListByCid(this.cid);
      this.getGoodsBySubId(this.subid);
    },
    mounted(){
      let winHeight = document.documentElement.clientHeight
      document.getElementById("leftNav").style.height= winHeight-46 +'px';
      document.getElementById('list-div').style.height=winHeight-90 +'px';
    },
    data(){
      return{
        categoryList:[],
        subList:[],
        subid:'2c9f6c9460337d540160337fefd60001',
        categoryIndex:0,
        cid:2,
        goodsList:[],
        active:0,
        loading:false,
        finished:false,
      }
    },
    methods:{
      getCategoryList(){
        var url='http://127.0.0.1:3000/clist';
        this.axios.get(url).then(res=>{
          
          this.categoryList=res.data;
          
        });
        
      },
      getSubListByCid(cid){
        this.active=0;
        this.cid=cid;
        var url='http://127.0.0.1:3000/sublist?cid='+this.cid;
        this.axios.get(url).then(res=>{
          //console.log(res.data);
          this.subList=res.data;
          this.getGoodsBySubId(this.subList[0].subid); 
          //console.log(this.goodsList)
        })
        
      },
      getGoodsBySubId(subid){
        this.subid=subid;
        var url='http://127.0.0.1:3000/goodsBySubId?subid='+this.subid;
        this.axios.get(url).then(res=>{
          if(res.data.code){
            this.goodsList=[{pname:'暂时无商品'}];
            console.log('暂时无商品');
          }else{
            this.goodsList=res.data;
            console.log(this.goodsList);
           
          }
         
        })
      },
      clickCategory(index,cid){
        this.categoryIndex=index;
        this.getSubListByCid(cid);
        this.getGoodsBySubId(this.subList[0].subid);
      },
      clickSub(index,title){
        
        this.getGoodsBySubId(this.subList[index].subid)
      },
      onLoad(){
        setTimeout(()=>{
          for(let i=0;i<10;i++){
            this. goodsList.push(this. goodsList.length+1)
          } 
          this.loading=false;
          if (this. goodsList.length >= 20) {
            this.finished = true;
          }
        },500)
      }
    },
    components:{goodsInfo}
  }
</script>

<style scoped>
  #leftNav ul li {
    line-height: 2rem;
    border-bottom:1px solid #E4E7ED;
    padding:3px;
    font-size:0.8rem;
    text-align: center;
  }
  .categoryActive{
    background-color: #3399FF;
  }
  #list-div{
    overflow-y: scroll;
  }
</style>