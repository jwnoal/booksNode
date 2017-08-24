var express = require('express');
var router = express.Router();
var mon = require('../mongodb');

/* var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json()); */


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
router.post('/mon', function(req, res, next) {
    console.log(req.body.type);
    mon(function(datas) {
        res.json({ booklist: datas });
    })
})
router.post('/login', function(req, res, next) {
    var param = {
        username = req.body.username,
        userpwd = req.body.userpwd
    }

})



module.exports = router;