var express = require('express');
var router = express.Router();
var mon = require('../mongodb');
var mose = require('../mongoose');

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
    /* router.post('/mon', function(req, res, next) {
        console.log(req.body.type);
        mon(function(datas) {
            res.json({ booklist: datas });
        })
    }) */
    /* router.post('/login', function(req, res, next) {
        var param = {
            username = req.body.username,
            userpwd = req.body.userpwd
        }
        user.findOne(param, function(err, doc) {
            if (err) {
                res.json({
                    status: "1",
                    msg: err.message
                });
            } else {
                if (doc) {
                    res.cookie('userId', doc.userId, {
                        path: '/',
                        maxAge: 1000 * 60 * 60
                    });
                    req.session.user = doc;
                    res.json({
                        status: "0",
                        msg: '',
                        result: {
                            username: doc.username
                        }
                    });
                }
            }
        })
    }) */
router.post('/mon', function(req, res, next) {
    Model.find({}, function(error, docs) {
        if (error) {
            console.log("error :" + error);
        } else {
            console.log(docs); //docs: age为28的所有文档
        }
    });
});

module.exports = router;