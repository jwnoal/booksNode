var express = require('express');
var router = express.Router();
// var mon = require('../mongodb');
var mose = require('../model/mongoose');

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
    mose.find({}, function(error, docs) {
        if (error) {
            console.log("error :" + error);
        } else {
            res.json({ booklist: docs });
        }
    });
});

module.exports = router;