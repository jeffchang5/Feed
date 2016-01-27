var mongoose = require('mongoose');
var cardSchema = mongoose.Schema({
    cards            : {
        username     : String,
        message     : String
}});

module.exports = mongoose.model('Card', cardSchema);