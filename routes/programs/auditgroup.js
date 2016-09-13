var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('programs/auditgroup', {
        title: 'CySec@VCU | Security Audit Group' });
});

module.exports = router;
