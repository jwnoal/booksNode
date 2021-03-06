var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Users = require('../modules/users');
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

module.exports = router;