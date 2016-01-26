
var Model = require('../config/card_model');
var Cards = function () {};
Cards.prototype.init = function () {
    Model.find().sort({$natural: -1}).limit(5).exec(function(err, documents) {
        console.log(documents);
        
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