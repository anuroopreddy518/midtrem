var mongoose = require('mongoose');

//schema
var playerschema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    number: Number,
});


module.exports = mongoose.model('Player',playerschema)
