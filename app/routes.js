// app/routes.js
module.exports = function(app, passport) {

    // =====================================
    // HOME PAGE (with login links) ========
    // =====================================
    app.get('/', function(req, res) {
        if (req.isAuthenticated()) {
            res.render('index', {
                message: req.flash('message'),
                user: req.user.local.username
                })
        }
            
        else {
            console.log(req.flash('messae'));
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
    app.get('/api/json', function(req, res) {
        
    });    
};
