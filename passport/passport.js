var LocalStrategy   = require('passport-local').Strategy;


var User            = require('../config/model.js');

// expose this function to our app using module.exports
module.exports = function(passport) {

    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });


    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
        return done(null, false);

        });
    });


    passport.use('local-signup', new LocalStrategy({

        usernameField : 'username',
        passwordField : 'password',
        passReqToCallback : true // allows us to pass back the entire request to the callback
    },
    function(req, username, password, done) {

        process.nextTick(function() {
            User.findOne({ 'local.username' :  username}, function(err, user) {
                if (err) {
                    console.log("error");
                    return done(err);
                }
                if (user) {
                    console.log("User already exists");
                    return done(null, false, req.flash('message', 'Username is already taken.'));
                }
                else {
                    console.log("New User");
                    var newUser = new User();
                    newUser.local.username = username;
                    newUser.local.password = newUser.generateHash(password);
                    newUser.save(function(err) {
                        if (err)
                            throw err;
                        return done(null, newUser);
                }
            );
        }})})}))};
