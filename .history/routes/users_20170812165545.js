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
    login.find(param, function(err, doc) {
        if (err) {
            console.log('df');
            res.json({
                status: "1",
                msg: err.message
            });
        } else {
            if (doc) {
                /*   res.cookie('userId', doc.userId, {
                      path: '/',
                      maxAge: 1000 * 60 * 60
                  });
                  req.session.user = doc; */
                res.json({
                    status: "0",
                    msg: '',
                    result: {
                        username: doc.userName
                    }
                });
            }
        }
    })
})


module.exports = router;