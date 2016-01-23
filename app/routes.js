// app/routes.js
module.exports = function(app, passport) {

    // =====================================
    // HOME PAGE (with login links) ========
    // =====================================
    app.get('/', function(req, res) {

        res.render('index', { message: req.flash('message')});

    });

    app.post('/api/login', function(req, res) {
    });

    app.post('/api/register', passport.authenticate('local-signup', {
        successRedirect : '/gf', // redirect to the secure profile section
        failureRedirect : '/', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));


    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');

    });
};

function isLoggedIn(req, res, next) {

    if (req.isAuthenticated())
        return next();

    res.redirect('/');
}