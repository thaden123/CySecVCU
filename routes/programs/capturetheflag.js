var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('programs/capturetheflag', {
        title: 'CySec@VCU | Capture the Flag' });
});

module.exports = router;
