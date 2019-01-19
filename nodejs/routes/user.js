const express = require('express');
const pool = require('../pool.js');
var router = express.Router();
router.post('/reg', function (req, res) {
 var username = req.body.username;
 var password = req.body.password;
 var sql='SELECT * FROM mall_user WHERE uname=?';
 pool.query(sql,[username],(err,result)=>{
   if(err)throw err;
   /* 当无结果时，可以插入 */
   if(result.length<1){
     var s="INSERT INTO mall_user VALUES (NULL, ?, ?,NOW())";
     pool.query(s,[username,password],(err1,result1)=>{
      if(err1)throw err1;
      if(result1.affectedRows>0){
       
        res.send({code:1,msg:'注册成功'});
      }
     })
    /* 有结果时，用户名已重复，返回错误提示 */
   }else{
    res.send({code:-2,msg:'用户名已存在'});
   }
 })
 
});
router.post('/login',function(req,res){
 var username = req.body.username;
 var password = req.body.password;
 var sql='SELECT * FROM mall_user WHERE uname=? AND upwd=?';
 pool.query(sql,[username,password],(err,result)=>{
    
    if(err)throw err;
    if(result.length>0){
      req.session.username=username;
      req.session.uid=result[0].uid;
      console.log(req.session);
      res.send({code:1,uid:result[0].uid});
    }else{
      res.send({code:-2,msg:'账号或密码错误'});
    }
  });

});
router.get('/isLogin',function(req,res){
  console.log(Boolean(req.session.uid));
  if(req.session.uid){
    res.send({code:1})
  }else{
    res.send({code:0})
  }
});
router.post('/addAddress',function(req,res){
 /*  console.log(Boolean(req.body.isDefault=='true')); */
  var content=req.body;
  var name=content.name,tel=content.tel,address=content.province+content.city+content.county+content.addressDetail,uid=content.uid;
  var isDefault=(req.body.isDefault=='true')?1:0; 
  var sql='INSERT INTO mall_address VALUES (NULL,?,?,?,?,?)';
  pool.query(sql,[uid,name,tel,address,isDefault],(err,result)=>{
    if(err) throw err;
    if(result.affectedRows>0){
      res.send({code:'1'});
    }
  })
 
});
router.get('/getaddress',function(req,res){
  var uid=req.query.uid;
  sql='SELECT * FROM mall_address WHERE uid = ? ';
  pool.query(sql,[uid],(err,result)=>{
   if(err) throw err
   res.send(result);
  })
});
router.get('/addcart',function(req,res){
 
  var uid=req.query.uid,pid=req.query.pid,count=req.query.count;
  sql='SELECT * FROM mall_cartitem WHERE pid = ? AND uid = ?';
  pool.query(sql,[pid,uid],(err,result)=>{
    if(result.length>0){
     
      res.send({code:-1})
    }else{
     
      sql='INSERT INTO mall_cartitem VALUES (NULL,?,?,?,0)';
      pool.query(sql,[pid,uid,count],(err,result)=>{
        if(err) throw err;
        res.send({code:1,data:result})
      })
    }
  })
})

module.exports = router;