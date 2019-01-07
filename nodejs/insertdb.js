const fs=require('fs');
const pool = require('./pool.js');
/* 向数据库插入产品 */

  fs.readFile('data/products.json','utf8',function(err, data){
    let newData= JSON.parse(data)
    let i=0
    let pushData=[]
    newData.map(function(value,index){
        if(value.IMAGE1!=null){
          let pid=value.ID
          let pname=value. NAME
          let subid=value. SUB_ID
          let ori_price=value.ORI_PRICE
          let pre_price=value.PRESENT_PRICE
          let amount=value.AMOUNT
          let detail=value.DETAIL
          let sales=value.SALES_COUNT
          let image1=value.IMAGE1
          let ctime=value.CREATE_TIME
          let utime=value.UPDATE_TIME
          let pic=value.PICTURE_COMPERSS_PATH
          let sql='INSERT INTO mall_products VALUES (?,?,?,?,?,?,?,?,?,?,?,?)'
          pool.query(sql,[pid,pname,subid,ori_price,pre_price,amount,detail,sales,image1,ctime,utime,pic],function(err,res){})
          
        }  
       
    })
  });
/* 向数据库插入子分类数据 */
/* fs.readFile('data/category_sub.json','utf8',function(err,data){
  let newData= JSON.parse(data)
  let i=0
  let pushData=[]
  newData.RECORDS.map(function(value,index){
    let subid=value.ID;
    let cid=value.MALL_CATEGORY_ID;
    let sname=value.MALL_SUB_NAME;
    let sql='INSERT INTO mall_categorysub VALUES (?,?,?)';
    pool.query(sql,[subid,cid,sname],function(err,res){})
  });
}) */
/* 向数据库插入子分类数据 */
/* fs.readFile('data/category.json','utf8',function(err,data){
  let newData= JSON.parse(data)
  let i=0
  let pushData=[]
  newData.RECORDS.map(function(value,index){
    let cid=value.ID;
    let cname=value.MALL_CATEGORY_NAME;
    let pic=value.IMAGE;
    let sql='INSERT INTO mall_category VALUES (?,?,?)';
    pool.query(sql,[cid,cname,pic],function(err,res){})
  })
}) */

/*  向数据库插入热卖商品数据 */
/* fs.readFile('data/data.json','utf8',function(err,data){
  let newData= JSON.parse(data).data.hotGoods;
  let i=0
  
  newData.map(function(value,index){
    let originPrice=value. mallPrice;
    let pid=value. goodsId;
    let pic=value.image;
    let price=value.price;
    let pname=value.name;
    let sql='INSERT INTO mall_hotgoods VALUES (?,?,?,?,?)';
    pool.query(sql,[originPrice,pic,pid,price,pname],(err,res)=>{});
  })
}) */