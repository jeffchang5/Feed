var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var feedSchema = mongoose.Schema({
    local            : {
        username     : String,
        password     : String
    }});
feedSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
}

feedSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

module.exports = mongoose.model('User', feedSchema);