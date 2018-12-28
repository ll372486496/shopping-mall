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
    {id:4,img_url:"http://127.0.0.1:3000/banner/banner5.jpg"}

  ];
  res.send(obj);
});