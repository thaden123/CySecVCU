var express = require('express');
var router = express.Router();

/* Inner height and width */
//var w = window.innerWidth;
//var h = window.innerHeight;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'CySec@VCU | Index' });
});

module.exports = router;
