 var mongoose = require('mongoose');
 var DB = mongoose.connec('mongodb://localhost:27017/noal'); //红色为数据库名
 /* var findData = function(db, callback) {
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
 } */
 mongoose.connection.on("open", function(err, db) {
     console.log("数据库连接成功");
     /* findData(db, function(result) {
         //显示结果
         console.log(result);

         //关闭数据库
         db.close();
     }); */
 });