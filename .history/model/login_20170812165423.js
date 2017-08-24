var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/noal', { useMongoClient: true });
var db = mongoose.connection

db.on('error', console.error.bind(console, '连接错误:'));
db.once('open', function() {
    console.log('login连接成功');
})

var userSchema = new mongoose.Schema({
    "id": String,
    "userName": String,
    "userPwd": String,
    "books": [{
        "type": String,
        "title": String,
        "description": String
    }]

})
module.exports = mongoose.model("user", userSchema, 'users');