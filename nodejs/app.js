//1:加载模块 express pool
const express = require("express");
const pool = require("./pool");
//2:创建express对象
var app = express();
//2.1:加载跨域访问组件
const cors = require("cors");
app.use(cors({
  origin:["http://127.0.0.1:8080",
  "http://localhost:8080"],
  credentials:true
}));
//3:指定监听端口3000
app.listen(3000);
//4:指定静态目录 public
// __dirname 当前程序所属目录绝对路径 
//app.js vue_app_server
app.use(express.static(__dirname+"/public"))
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