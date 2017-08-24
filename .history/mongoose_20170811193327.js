var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    "type": String,
    "title": String,
    "description": String
})
module.exports = mongoose.model("user", userSchema);