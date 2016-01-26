// app/routes.js
module.exports = function(app, passport) {
    var card = require('./cardMongo.js');
    app.get('/', function(req, res) {
        if (req.isAuthenticated()) {
            res.render('index', {
                message: req.flash('message'),
                user: req.user.local.username
                });
        }
            
        else {
  
            res.render('index',{
                message: req.flash('message')
            });
            
        }

    });

    app.post('/api/login', passport.authenticate('local-login', {
        successRedirect : '/', // redirect to the secure profile section
        failureRedirect : '/', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));

    app.post('/api/register', passport.authenticate('local-signup', {
        successRedirect : '/', // redirect to the secure profile section
        failureRedirect : '/', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));
    app.get('/api/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });
    app.post('/api/update', function(req, res) {
        card.update(req.body)
    });
    app.post('/api/fetch', function(req, res) {
        console.log("I'm trying");
        card.init(function(err, data) {
            res.send(data);
        });
    });    
};
