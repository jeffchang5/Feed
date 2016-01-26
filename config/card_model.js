var mongoose = require('mongoose');
var cardSchema = mongoose.Schema({
    cards            : {
        username     : String,
        messag     : String
}});

module.exports = mongoose.model('Card', cardSchema);