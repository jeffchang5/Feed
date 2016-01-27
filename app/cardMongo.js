
var Model = require('../config/card_model');
var Cards = function () {};
Cards.prototype.init = function (callback) {
    
    Model.find().limit(8).sort({'$natural': -1}).lean().exec(function(err, documents) {
        callback(null, documents);
    
    });
    
};
Cards.prototype.update = function (object) {
    var model = new Model();
    model.cards.message = object.message;
    model.cards.username = object.username;
    model.save(function(err) {
        if (err)
            throw err;
    }
)};
module.exports = new Cards();