var mongoose = require('mongoose');
var cardSchema = mongoose.Schema({
    local            : {
        username     : String,
        password     : String
}});

module.exports = mongoose.model('Card', cardSchema);