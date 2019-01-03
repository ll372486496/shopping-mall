//1:加载模块 express pool
const express = require("express");
const pool = require("./pool");
const bodyParser=require('body-parser'); // bodyParser模块
const userRouter=require('./routes/user.js'); // 服务器用户路由
const productRouter=require('./routes/product.js');// 服务器产品路由

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
//5：装载路由
app.use('/user',userRouter);
app.use('/product',productRouter);
//6:使用bodyParser模块
app.use(bodyParser.urlencoded({
  extended:false
}));
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
  var obj=[
    {
      originPrice: 4.5,
      image: "http://127.0.0.1:3000/hots/h1.jpg",
      goodsId: "1091",
      price: 3.9,
      name: "美汁源果粒奶优水果饮料蜜桃450ml/瓶"
    },
    {
      originPrice: 5.5,
      image: "http://127.0.0.1:3000/hots/h2.jpg",
      goodsId: "1092",
      price: 4.5,
      name: "阿华田麦芽乳饮品牛奶味250mL/盒"
    },
    {
      originPrice: 5.5,
      image: "http://127.0.0.1:3000/hots/h3.jpg",
      goodsId: "1093",
      price: 3.7,
      name: "养元香浓六个核桃240ml/瓶"
    },
    {
      originPrice: 7.5,
      image: "http://127.0.0.1:3000/hots/h4.jpg",
      goodsId: "1094",
      price: 6.5,
      name: "名屋木瓜牛乳340ml/瓶"
    },
    {
      originPrice: 4.2,
      image: "http://127.0.0.1:3000/hots/h5.jpg",
      pid: "1095",
      price: 3.9,
      name: "美汁源果粒奶优草莓味450ml/瓶"
    },
    {
      originPrice: 8.8,
      image: "http://127.0.0.1:3000/hots/h6.jpg",
      pid: "1096",
      price: 7.5,
      name: "名屋醇豆浆饮料485ml/瓶"
    },
    {
      originPrice: 8.5,
      image: "http://127.0.0.1:3000/hots/h7.jpg",
      pid: "1097",
      price: 6.3,
      name: "李子园甜牛奶乳饮料450ml/瓶"
    },
    {
      originPrice: 5,
      image: "http://127.0.0.1:3000/hots/h8.jpg",
      pid: "1098",
      price: 4.5,
      name: "李子园草莓风味乳饮料450ml/瓶"
    },
    {
      originPrice: 9.9,
      image: "http://127.0.0.1:3000/hots/h9.jpg",
      pid: "1099",
      price: 8.5,
      name: "娃哈哈AD钙奶220ml*4/条"
    },
    {
      originPrice: 7.6,
      image: "http://127.0.0.1:3000/hots/h10.jpg",
      pid: "1100",
      price: 6,
      name: "一榨鲜绿豆汁300ml/瓶"
    },
    {
      originPrice: 5.5,
      image: "http://127.0.0.1:3000/hots/h11.jpg",
      pid: "1101",
      price: 5,
      name: "李子园朱古力风味乳饮料450ml/瓶"
    },
    {
      originPrice: 8.5,
      image: "http://127.0.0.1:3000/hots/h12.jpg",
      pid: "1102",
      price: 7.5,
      name: "名屋黑豆浆饮料485ml/瓶"
    },
    {
      originPrice:5,
      image: "http://127.0.0.1:3000/hots/h13.jpg",
      pid: "1103",
      price: 4.5,
      name: "阿华田麦芽乳饮品高钙味250mL/盒"
    },
    {
      originPrice: 8,
      image: "http://127.0.0.1:3000/hots/h14.jpg",
      pid: "1104",
      price: 6.5,
      name: "名屋香蕉牛乳340ml/瓶"
    },
    {
      originPrice: 4.5,
      image: "http://127.0.0.1:3000/hots/h15.jpg",
      pid: "1115",
      price: 3.9,
      name: "美汁源果粒奶优原味450ml/瓶"
    },
    {
      originPrice: 17.4,
      image: "http://127.0.0.1:3000/hots/h16.jpg",
      pid: "1116",
      price: 9,
      name: "旺仔牛奶125ml*4/条"
    },
    {
      originPrice: 88,
      image: "http://127.0.0.1:3000/hots/h17.jpg",
      pid: "1117",
      price: 68,
      name: "同福阿胶粥300g/箱"
    },
    {
      originPrice: 4,
      image: "http://127.0.0.1:3000/hots/h18.jpg",
      pid: "1118",
      price: 3.5,
      name: "银鹭桂圆莲子八宝粥360g/瓶"
    },
    {
      originPrice: 16.5,
      image: "http://127.0.0.1:3000/hots/h19.jpg",
      pid: "1119",
      price: 14.5,
      name: "椰树牌椰汁饮料1L/瓶"
    },
    {
       originPrice: 7,
      image: "http://127.0.0.1:3000/hots/h20.jpg",
      pid: "1120",
      price: 4.5,
      name: "豆本豆原味豆奶250ml/盒"
    }
  ];
  res.send(obj);
});
/* app.post('/reg',(req,res)=>{
  console.log(req.body);
}); */