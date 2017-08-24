var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/noal');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(callback) {
    // yay!
});

var userSchema = new mongoose.Schema({
    "type": String,
    "title": String,
    "description": String
})
module.exports = mongoose.model("library", userSchema, 'library');