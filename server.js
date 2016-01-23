var path = require('path');
var express  = require('express');
var app      = express();
var port     = process.env.PORT || 8080;
var mongoose = require('mongoose');
var passport = require('passport');
var flash    = require('connect-flash');

var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');
var jade = require('jade');
var database = require('./config/database')


var config = require('./passport/passport.js')(passport);
var flash = require('connect-flash');

app.use(flash());

// configuration ===============================================================
mongoose.connect(database.url); // connect to our database

require('./passport/passport')(passport); // pass passport for configuration


app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.json()); // get information from html forms
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'jade');
app.use(express.static('public'));
app.use(bodyParser.urlencoded( {
    extended:true
}));



// required for passport
app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 }, resave: true, saveUninitialized: true }))
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

// routes ======================================================================
require('./app/routes')(app, passport); // load our routes and pass in our app and fully configured passport

// launch ======================================================================
app.listen(port);
process.nextTick(function() {
console.log(mongoose.connection.readyState);
});
console.log('The magic happens on port ' + port);