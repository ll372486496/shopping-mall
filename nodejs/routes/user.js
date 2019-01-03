const express = require('express');
const pool = require('../pool.js');
var router = express.Router();
router.post('/reg', function (req, res) {
  console.log(req);
  res.send('123');
 
})


module.exports = router;