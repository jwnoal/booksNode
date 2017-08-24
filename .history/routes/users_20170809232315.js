var express = require('express');
var router = express.Router();

var mon = require('../mongodb');


/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource index');
});

//查询所有用户数据
router.get('/users', function(req, res, next) {
    Users.fetch(function(err, users) {
        if (err) {
            console.log(err);
        }
        res.json({ data: users }); //这里也可以json的格式直接返回数据res.json({data: users});
    })
})
router.get('/mon', function(req, res, next) {
    mon(function(datas) {
        res.json({ booklist: datas });
    })
    console.log(req.body);
})
router.post('/login', function(req, res, next) {
    var name = req.body.name;
    var pass = req.body.password;
    console.log('name:' + name);
    console.log('pass:' + pass);
    if (name == 'sis' && pass == '1') {
        res.send('1');
    }
    res.end('is over');
});

module.exports = router;