const express = require('express');
const pool = require('../pool.js');
var router = express.Router();
router.post('/details',function(req,res){
  var pid=req.body.pid;
  var sql='SELECT * FROM mall_products WHERE pid=?';
  pool.query(sql,[pid],(err,result)=>{
    if(err) throw err;
    if(result.length<1){
      /* 无结果时，返回 */
      res.send({code:-1,msg:'没有产品'})
    }else{
      res.send({code:1,data:result})
    }
  });
});


module.exports = router;