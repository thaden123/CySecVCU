var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('hSpace', {
        title: 'CySec@VCU | Hacker Space' });
});

module.exports = router;
