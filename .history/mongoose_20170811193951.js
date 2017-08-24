var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/noal');

var userSchema = new mongoose.Schema({
    "type": String,
    "title": String,
    "description": String
})
module.exports = mongoose.model("library", userSchema, 'library');