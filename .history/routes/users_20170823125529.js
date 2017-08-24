var express = require('express');
var router = express.Router();
// var mon = require('../mongodb');
var mose = require('../model/books');
var login = require('../model/login');

/* var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json()); */


/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource index');
});

/* router.post('/mon', function(req, res, next) {
        mon(function(datas) {
            res.json({ booklist: datas });
            // console.log(datas);
        })
    }) */
router.post('/mon', function(req, res, next) {
    mose.find({}, function(error, docs) {
        if (error) {
            console.log("error :" + error);
        } else {
            res.json({ booklist: docs });
        }
    });
});
router.post('/login', function(req, res, next) {
    var param = {
        userName: req.body.username,
        userPwd: req.body.userpwd
    }
    login.findOne(param, function(err, doc) {
        console.log(err);
        if (err) {
            console.log(err);
        } else {
            if (doc) {
                //   req.session.user = doc; 
                res.json({
                    status: "0",
                    msg: '',
                    username: doc.userName
                });
            } else {
                res.json({
                    status: "1"
                });
            }
        }
    })
})
router.post('/add', function(req, res, next) {
    console.log(req.body)
    var userName = { userName: req.body.username };
    var books = { $set: { books: req.body.books } };
    var options = { upsert: true };
    login.books.create(userName, books, options, function(err) {
        if (err) {
            console.log('更新失败' + err);
        } else {
            console.log('更新成功');
        }
    });

});

module.exports = router;