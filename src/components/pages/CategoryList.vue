<template>
  <div class="catagorylist">
   <div class="navbar">
     <van-nav-bar   title="类别列表" />
     <van-row>

      <van-col span="6">
        
          <div id="leftNav">
            <ul>
              <li v-for="(item,index) in categoryList" :key="index" @click="clickCategory(index,item.cid)" :class="{categoryActive:categoryIndex==index}">
                {{item.cname}}
              </li>
            </ul>
          </div>
       
      </van-col>

      <van-col span="18">
        <div class="tabCategorySub">
          <van-tabs @click="clickSub" v-model="active">
            <van-tab v-for="(item, index) in subList" :key="index" :title="item.sname">
              <div id="list-div">
                <van-list>
                  <van-row gutter="20"><!-- gutter为列元素间距 -->
                    <van-col span="12" v-if='goodsList.length==0'>暂时无商品</van-col>
                    <van-col span="12" v-else v-for="( product, index) in  goodsList" :key="index">
                      <goodsInfo :goods='product' :goodsId="product.pid"></goodsInfo>                      
                    </van-col>
                    <van-col span="24">
                    <van-button type='primary' @click="onLoad()" v-if="!finished" size="large">
                      加载更多
                    </van-button>
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
      this.onLoad();
    },
    mounted(){
      let winHeight = document.documentElement.clientHeight
      document.getElementById("leftNav").style.height= winHeight-46 +'px';
      
    },
    data(){
      return{
        categoryList:[],
        subList:[],
        subid:'2c9f6c9460337d540160337fefd60001',
        categoryIndex:0,
        cid:1,
        goodsList:[],
        active:0,
        finished:false,
        pageNum:0,
        pageSize:10,
        pageCount:1,       
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
        var url=`http://127.0.0.1:3000/goodsBySubId?subid=${this.subid}&pageNum=${this.pageNum}&pageSize=${this.pageSize}`;
        this.axios.get(url).then(res=>{
          if(res.data.code<0){
            this.goodsList=[];
            this.finished=true;
            console.log('暂时无商品');
          }else{
            this.goodsList=this.goodsList.concat(res.data.data);
            console.log(this.goodsList);
            this.pageCount=res.data.pageCount;
           
          }
         
        })
      },
      clickCategory(index,cid){
        this.clear();
        this.categoryIndex=index;
        this.getSubListByCid(cid);       
      },
      clickSub(index,title){
        this.clear();
        this.pageNum=1;
        this.finished=(this.pageNum>=this.pageCount);
        this.getGoodsBySubId(this.subList[index].subid)
      },
      onLoad(){
       this.pageNum++;
       this.finished=(this.pageNum>=this.pageCount);
       if(this.finished){return}
       this.getGoodsBySubId(this.subid);
      },  
      clear(){
       this.finished=false;
       this.goodsList=[];
       this.pageNum=1;
       this.pageCount=1;
      }   
    },
    components:{goodsInfo}
  }
</script>

<style scoped>
  .categorylist{
    overflow: hidden;
  }
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
    height:577px;
    overflow-y: scroll;
  }
</style>