var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('programs', {
        title: 'CySec@VCU | Current Programs' });
});

module.exports = router;
