var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/smashBros', { useNewUrlParser: true });
require('./models/Character');
var db = mongoose.connection; //Saves the connection as a variable to use
db.on('error', console.error.bind(console, 'connection error:')); //Checks for connection errors
db.once('open', function() { //Lets us know when we're connected
    console.log('Connected to smashBros');
    db.collection("Character").insertMany([
      { title: "Mario", picture: "https://www.ssbwiki.com/images/thumb/4/44/Mario_SSBU.png/100px-Mario_SSBU.png", upvotes: 0 },
      { title: "Luigi", picture: "https://www.ssbwiki.com/images/thumb/b/bb/Luigi_SSBU.png/91px-Luigi_SSBU.png", upvotes: 0 },
      { title: "Peach", picture: "https://www.ssbwiki.com/images/thumb/7/74/Peach_SSBU.png/89px-Peach_SSBU.png", upvotes: 0 },
      { title: "Bowser", picture: "https://www.ssbwiki.com/images/thumb/4/49/Bowser_SSBU.png/100px-Bowser_SSBU.png", upvotes: 0 },
      { title: "Yoshi", picture: "https://www.ssbwiki.com/images/thumb/8/8d/Yoshi_SSBU.png/100px-Yoshi_SSBU.png", upvotes: 0 },
      { title: "Donkey Kong", picture: "https://www.ssbwiki.com/images/thumb/c/c9/Donkey_Kong_SSBU.png/100px-Donkey_Kong_SSBU.png", upvotes: 0 },
      ]);
});



var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
