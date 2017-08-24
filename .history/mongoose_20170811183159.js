var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    "userId": String,
    "username": String,
    "userpwd": String
})
module.exports = mongoose.model("user", userSchema);