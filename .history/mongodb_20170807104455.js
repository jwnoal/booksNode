//引入mongodb模块，获得客户端对象
var MongoClient = require('mongodb').MongoClient;
//连接字符串
var DB_CONN_STR = 'mongodb://localhost:27017/noal';

//定义函数表达式，用于操作数据库并返回结果
var findData = function(db, callback) {
    //获得指定的集合 
    var collection = db.collection('library');
    //要查询数据的条件，<=10岁的用户
    var where = { age: { "$lte": 10 } };
    //要显示的字段
    var set = { name: 1, age: 1 };
    collection.find().toArray(function(err, result) {
        //如果存在错误
        if (err) {
            console.log('Error:' + err);
            return;
        }
        //调用传入的回调方法，将操作结果返回
        callback(result);
    });
}

function mongo() {
    MongoClient.connect(DB_CONN_STR, function(err, db) {
        console.log("连接成功！");
        //执行插入数据操作，调用自定义方法
        findData(db, function(result) {
            //显示结果
            // console.log(result);
            return result;
            // bb(result);
            //关闭数据库
            db.close();
        });
    });
}

//使用客户端连接数据，并指定完成时的回调方法




module.exports = mongo;