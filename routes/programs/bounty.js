var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('programs/bounty', {
        title: 'CySec@VCU | Bounty Program' });
});

module.exports = router;
