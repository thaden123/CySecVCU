var express = require('express');
var router = express.Router();

/* GET about page. */
router.get('/', function(req, res, next) {
    res.render('resources', {
        title: 'CySec@VCU | Resources' });
});

module.exports = router;
