//1:加载模块 express pool
const express = require("express");
const pool = require("./pool");
const bodyParser=require('body-parser'); // bodyParser模块
const userRouter=require('./routes/user.js'); // 服务器用户路由
const productRouter=require('./routes/product.js');// 服务器产品路由
const session=require('express-session');//express-session模块
//2:创建express对象
var app = express();
//2.1:加载跨域访问组件
const cors = require("cors");
app.use(cors({
  origin:["http://127.0.0.1:8080",
  "http://localhost:8080"],
  credentials:true
}));
//2.2加载express-session组件并配置
app.use(session({
  secret:"128位随机字符",   
  resave:false,             
  saveUninitialized:true,   
  cookie:{
    maxAge:1000 * 60 * 60 * 24 
  }
}));
//3:指定监听端口3000
app.listen(3000);
//4:指定静态目录 public
// __dirname 当前程序所属目录绝对路径 
//app.js vue_app_server
app.use(express.static(__dirname+"/public"))
//5:使用bodyParser模块
app.use(bodyParser.urlencoded({
  extended:false
}));
//6：装载路由
app.use('/user',userRouter);
app.use('/product',productRouter);
//功能一:首页轮播图
app.get("/bannerlist",(req,res)=>{
  var obj = [
    {id:1,img_url:"http://127.0.0.1:3000/banner/banner1.jpg"},
    {id:2,img_url:"http://127.0.0.1:3000/banner/banner2.jpg"},
    {id:3,img_url:"http://127.0.0.1:3000/banner/banner3.jpg"},
    {id:4,img_url:"http://127.0.0.1:3000/banner/banner4.jpg"},
    {id:5,img_url:"http://127.0.0.1:3000/banner/banner5.jpg"}

  ];
  res.send(obj);
});
app.get("/categroylist",(req,res)=>{
  var categroy=[
    {
      cid:1,
      cname:"新鲜水果",
      img_url:"http://127.0.0.1:3000/category/c1.png"

    },
    {
      cid:2,
      cname:"中外名酒",
      img_url:"http://127.0.0.1:3000/category/c2.png"

    },
    {
      cid:3,
      cname:"营养奶品",
      img_url:"http://127.0.0.1:3000/category/c3.png"

    },
    {
      cid:4,
      cname:"食品饮料",
      img_url:"http://127.0.0.1:3000/category/c4.png"

    },
    {
      cid:5,
      cname:"个人护理",
      img_url:"http://127.0.0.1:3000/category/c5.png"

    }
  ];
  res.send(categroy)
});
app.get('/recommend',(req,res)=>{
  var recommend=[
    {
      img_url:"http://127.0.0.1:3000/recommend/r1.jpg",
      originPrice:22.00,
      price:16.55,
      pid:1043,
      pname:"纳美小苏打源生护龈牙膏3010/支"
    },
    {
      img_url:"http://127.0.0.1:3000/recommend/r2.jpg",
      originPrice:10.00,
      price:9.5,
      pid:1046,
      pname:"ABCK25超吸棉柔护垫22片/包"
    },
    {
      img_url:"http://127.0.0.1:3000/recommend/r3.jpg",
      originPrice:6,
      price:5,
      pid:1049,
      pname:"果倍爽橙汁饮料330ml/瓶"
    },
    {
      img_url:"http://127.0.0.1:3000/recommend/r4.jpg",
      originPrice:108,
      price:99,
      pid:1033,
      pname:"睿嫣白檀香护发素500ml/瓶"
    },
    {
      img_url:"http://127.0.0.1:3000/recommend/r5.jpg",
      originPrice:4,
      price:4,
      pid:1148,
      pname:"乐百氏脉动芒果味600ml/瓶"
    },
    {
      img_url:"http://127.0.0.1:3000/recommend/r6.jpg",
      originPrice:6.9,
      price:6.2,
      pid:1130,
      pname:"农夫山泉NFC橙汁100%300ml/瓶"
    },
    {
      img_url:"http://127.0.0.1:3000/recommend/r7.jpg",
      originPrice:8.9,
      price:8.8,
      pid:1144,
      pname:"七度空间少女棉超薄超长夜用卫生巾8片/包"
    },
    {
      img_url:"http://127.0.0.1:3000/recommend/r8.jpg",
      originPrice:18,
      price:15,
      pid:1110,
      pname:"爱莲巧牛奶巧克力100g/块"
    },
  ];
  res.send(recommend);
});
app.get('/floors',(req,res)=>{
  var floors={
    floor1:{
      title:"营养奶品",
      data:[
        {
          pid: "1087",
          image: "http://127.0.0.1:3000/floors/f1_1.jpg"
        },
        {
          pid: "1088",
          image: "http://127.0.0.1:3000/floors/f1_2.jpg"
        },
        
        {
          pid: "1089",
          image: "http://127.0.0.1:3000/floors/f1_3.jpg"
        },
        {
          pid: "1090",
          image: "http://127.0.0.1:3000/floors/f1_4.jpg"
        },
        {
          pid: "1091",
          image: "http://127.0.0.1:3000/floors/f1_5.jpg"
        }
      ]
    } ,
    floor2: {
      title:"新鲜水果",
      data:[
        {
          pid: "1051",
          image: "http://127.0.0.1:3000/floors/f2_1.jpg"
        },
        {
          pid: "1052",
          image: "http://127.0.0.1:3000/floors/f2_2.jpg"
        },
        {
          pid: "1053",
          image: "http://127.0.0.1:3000/floors/f2_3.jpg"
        },
        {
          pid: "1054",
          image: "http://127.0.0.1:3000/floors/f2_4.jpg"
        },
        {
          pid: "1055",
          image: "http://127.0.0.1:3000/floors/f2_5.jpg"
        }
      ]},
    floor3:{
      title:"休闲食品",
      data:[
        {
          pid: "1071",
          image: "http://127.0.0.1:3000/floors/f3_1.jpg"
        },
        {
          pid: "1072",
          image: "http://127.0.0.1:3000/floors/f3_2.jpg"
        },
        {
          pid: "1073",
          image: "http://127.0.0.1:3000/floors/f3_3.jpg"
        },
        {
          pid: "1074",
          image: "http://127.0.0.1:3000/floors/f3_4.jpg"
        },
        {
          pid: "1075",
          image: "http://127.0.0.1:3000/floors/f3_5.jpg"
        }
      ]} 
  };
  res.send(floors);
});
app.get('/hots',(req,res)=>{
  var obj=[];
  var sql='SELECT * FROM mall_hotgoods';
  pool.query(sql,(err,result)=>{
    if(err)throw err;
    obj=result;
   /*  console.log(obj); */
    res.send(obj);
  })
  
});
app.get('/clist',(req,res)=>{
  
  var sql='SELECT * FROM mall_category ORDER BY cid';
  pool.query(sql,(err,result)=>{
    if(err){
      throw err;
      res.send({code:-1,msg:'服务器故障'});
    }
    if(result.length>0){
      res.send(result);
    }else{
      res.send({code:-1,msg:'服务器故障'});
    }
  })
});
app.get('/sublist',(req,res)=>{
  var cid=req.query.cid;
  var sql='SELECT * FROM mall_categorysub WHERE cid=?';
  pool.query(sql,[cid],(err,result)=>{
    if(err){
      throw err;
      res.send({code:-1,msg:'服务器故障'});
    }
    if(result.length>0){
      res.send(result);
    }else{
      res.send({code:-1,msg:'服务器故障'});
    }
  })
});
app.get('/goodsBySubId',(req,res)=>{
  
  var subid=req.query.subid;
  var pageNum=Number(req.query.pageNum?req.query.pageNum:1) ;
  var pageSize=Number(req.query.pageSize?req.query.pageSize:10);
  var start=(pageNum-1)*pageSize;


  var progress=0;
  var obj={code:1};
  //查询总记录数，并计算总页数
  var sql='SELECT COUNT(pid) AS c FROM mall_products WHERE subid = ? ';
  pool.query(sql,[subid],(err,result)=>{
    if(err) throw err;
    var pageCount = Math.ceil(result[0].c/pageSize);
    progress+=50;
    obj.pageCount=pageCount;
    if(progress==100){
      res.send(obj);
    }
  })

  //根据提交参数，查询当前页
  var sql='SELECT * FROM mall_products WHERE subid = ? LIMIT ?,?';
  pool.query(sql,[subid,start,pageSize],(err,result)=>{
    if(err){
      throw err;
      res.send({code:-1,msg:'服务器故障'});
    }
    if(result.length>0){
      obj.data=result
      progress+=50;
      if(progress==100)
      res.send(obj);
    }else{
      res.send({code:-1,msg:'服务器故障'});
    }
  })
});
app.get('/cartItem',(req,res)=>{
  var uid=req.query.uid;
  var sql='SELECT mall_cartitem.*,mall_products.* FROM mall_cartitem INNER JOIN mall_products ON mall_cartitem.pid=mall_products.pid WHERE mall_cartitem.uid=? AND mall_cartItem.isdel= 0 '
  pool.query(sql,[uid],(err,result)=>{
    if(err) throw err;
    if(result.length>0){
      console.log(1);
      res.send({code:1,data:result})
    }else{
      console.log(-1);
      res.send({code:-1,msg:'为空'})
    }
  })
});
