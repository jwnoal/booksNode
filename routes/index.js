var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});
router.get('/first', function(req, res, next) {
    res.json({ name: 'noal', age: '13' });
});

module.exports = router;