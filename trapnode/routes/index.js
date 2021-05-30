const Blockchain = require('../../blockchain');
var express = require('express');
var router = express.Router();


bc = new Blockchain();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('coin', { title: 'TrapCoin', blockchain: bc.chain });
  //res.json(bc.chain);
});

module.exports = router;
