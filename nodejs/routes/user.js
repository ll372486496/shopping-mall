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
  /* console.log(result); */
  if(err)throw err;
  if(result.length>0){
   
    res.send({code:1,msg:'登录成功'});
  }else{
    res.send({code:-2,msg:'账号或密码错误'});
  }
});
})


module.exports = router;