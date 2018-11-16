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
    console.log('Crap was added!');
//         db.collection("characters").insertMany([
//     { title: "Mario", picture: "https://www.ssbwiki.com/images/thumb/4/44/Mario_SSBU.png/100px-Mario_SSBU.png", upvotes: 0 },
//     { title: "Luigi", picture: "https://www.ssbwiki.com/images/thumb/b/bb/Luigi_SSBU.png/91px-Luigi_SSBU.png", upvotes: 0 },
//     { title: "Peach", picture: "https://www.ssbwiki.com/images/thumb/7/74/Peach_SSBU.png/89px-Peach_SSBU.png", upvotes: 0 },
//     { title: "Bowser", picture: "https://www.ssbwiki.com/images/thumb/4/49/Bowser_SSBU.png/100px-Bowser_SSBU.png", upvotes: 0 },
//     { title: "Yoshi", picture: "https://www.ssbwiki.com/images/thumb/8/8d/Yoshi_SSBU.png/100px-Yoshi_SSBU.png", upvotes: 0 },
//     { title: "Donkey Kong", picture: "https://www.ssbwiki.com/images/thumb/c/c9/Donkey_Kong_SSBU.png/100px-Donkey_Kong_SSBU.png", upvotes: 0 }
//     ]);
    
//     db.collection("characters").insertMany([
// { title: "Pikachu", picture: "https://www.ssbwiki.com/images/thumb/9/93/Pikachu_SSBU.png/100px-Pikachu_SSBU.png", upvotes: 0 },
// { title: "Jigglypuff", picture: "https://www.ssbwiki.com/images/thumb/6/6a/Jigglypuff_SSBU.png/100px-Jigglypuff_SSBU.png", upvotes: 0 },
// { title: "Mewtwo", picture: "https://www.ssbwiki.com/images/thumb/d/de/Mewtwo_SSBU.png/99px-Mewtwo_SSBU.png", upvotes: 0 },
// { title: "Lucario", picture: "https://www.ssbwiki.com/images/thumb/0/08/Lucario_SSBU.png/100px-Lucario_SSBU.png", upvotes: 0 },
// { title: "Greninja", picture: "https://www.ssbwiki.com/images/thumb/d/da/Greninja_SSBU.png/100px-Greninja_SSBU.png", upvotes: 0 },
// { title: "Captain Falcon", picture: "https://www.ssbwiki.com/images/thumb/d/da/Captain_Falcon_SSBU.png/100px-Captain_Falcon_SSBU.png", upvotes: 0 },
// { title: "Ness", picture: "https://www.ssbwiki.com/images/thumb/8/82/Ness_SSBU.png/100px-Ness_SSBU.png", upvotes: 0 },
// { title: "Lucas", picture: "https://www.ssbwiki.com/images/thumb/8/81/Lucas_SSBU.png/100px-Lucas_SSBU.png", upvotes: 0 },
// { title: "Ice Climbers", picture: "https://www.ssbwiki.com/images/thumb/1/12/Ice_Climbers_SSBU.png/100px-Ice_Climbers_SSBU.png", upvotes: 0 },
// { title: "Marth", picture: "https://www.ssbwiki.com/images/thumb/e/e9/Marth_SSBU.png/100px-Marth_SSBU.png", upvotes: 0 },
// { title: "Ike", picture: "https://www.ssbwiki.com/images/thumb/8/86/Ike_SSBU.png/100px-Ike_SSBU.png", upvotes: 0 },
// { title: "Robin", picture: "https://www.ssbwiki.com/images/thumb/8/82/Robin_SSBU.png/100px-Robin_SSBU.png", upvotes: 0 },
// { title: "Lucina", picture: "https://www.ssbwiki.com/images/thumb/d/dc/Lucina_SSBU.png/100px-Lucina_SSBU.png", upvotes: 0 },
// { title: "Mr Game and Watch", picture: "https://www.ssbwiki.com/images/thumb/c/cb/Mr._Game_%26_Watch_SSBU.png/100px-Mr._Game_%26_Watch_SSBU.png", upvotes: 0 },
// { title: "Pit", picture: "https://www.ssbwiki.com/images/thumb/3/38/Pit_SSBU.png/100px-Pit_SSBU.png", upvotes: 0 },
// { title: "Palutena", picture: "https://www.ssbwiki.com/images/thumb/6/6b/Palutena_SSBU.png/95px-Palutena_SSBU.png", upvotes: 0 },
// { title: "Dark Pit", picture: "https://www.ssbwiki.com/images/thumb/0/09/Dark_Pit_SSBU.png/95px-Dark_Pit_SSBU.png", upvotes: 0 },
// { title: "Wario", picture: "https://www.ssbwiki.com/images/thumb/0/04/Wario_SSBU.png/100px-Wario_SSBU.png", upvotes: 0 },
// { title: "Olimar", picture: "https://www.ssbwiki.com/images/thumb/b/b3/Olimar_SSBU.png/100px-Olimar_SSBU.png", upvotes: 0 },
// { title: "R.O.B.", picture: "https://www.ssbwiki.com/images/thumb/6/60/R.O.B._SSBU.png/100px-R.O.B._SSBU.png", upvotes: 0 },
// { title: "Villager", picture: "https://www.ssbwiki.com/images/thumb/a/ac/Villager_SSBU.png/100px-Villager_SSBU.png", upvotes: 0 },
// { title: "Little Mac", picture: "https://www.ssbwiki.com/images/thumb/5/53/Little_Mac_SSBU.png/100px-Little_Mac_SSBU.png", upvotes: 0 },
// { title: "Wii Fit Trainer", picture: "https://www.ssbwiki.com/images/thumb/f/ff/Wii_Fit_Trainer_SSBU.png/100px-Wii_Fit_Trainer_SSBU.png", upvotes: 0 },
// { title: "Shulk", picture: "https://www.ssbwiki.com/images/thumb/0/0f/Shulk_SSBU.png/100px-Shulk_SSBU.png", upvotes: 0 },
// { title: "Duck Hunt", picture: "https://www.ssbwiki.com/images/thumb/d/d8/Duck_Hunt_SSBU.png/100px-Duck_Hunt_SSBU.png", upvotes: 0 },
// { title: "Snake", picture: "https://www.ssbwiki.com/images/thumb/0/02/Snake_SSBU.png/82px-Snake_SSBU.png", upvotes: 0 },
// { title: "Sonic", picture: "https://www.ssbwiki.com/images/thumb/b/ba/Sonic_SSBU.png/100px-Sonic_SSBU.png", upvotes: 0 },
// { title: "Mega Man", picture: "https://www.ssbwiki.com/images/thumb/4/46/Mega_Man_SSBU.png/100px-Mega_Man_SSBU.png", upvotes: 0 },
// { title: "Pac-Man", picture: "https://www.ssbwiki.com/images/thumb/0/03/Pac-Man_SSBU.png/100px-Pac-Man_SSBU.png", upvotes: 0 },
// { title: "Piranha Plant", picture: "https://www.ssbwiki.com/images/thumb/f/f0/Piranha_Plant_SSBU.png/100px-Piranha_Plant_SSBU.png", upvotes: 0 }
// ]);
    
//     db.collection("characters").insertMany([
//         { title: "Dr Mario", picture: "https://www.ssbwiki.com/images/thumb/3/3f/Dr._Mario_SSBU.png/100px-Dr._Mario_SSBU.png", upvotes: 0 },
//         { title: "Rosalina", picture: "https://www.ssbwiki.com/images/thumb/b/b8/Rosalina_SSBU.png/100px-Rosalina_SSBU.png", upvotes: 0 },
//         { title: "Bowser Jr", picture: "https://www.ssbwiki.com/images/thumb/2/2b/Bowser_Jr._SSBU.png/100px-Bowser_Jr._SSBU.png", upvotes: 0 },
//         { title: "Diddy Kong", picture: "https://www.ssbwiki.com/images/thumb/a/a7/Diddy_Kong_SSBU.png/96px-Diddy_Kong_SSBU.png", upvotes: 0 },
//         { title: "Link", picture: "https://www.ssbwiki.com/images/thumb/8/84/Link_SSBU.png/100px-Link_SSBU.png", upvotes: 0 },
//         { title: "Zelda", picture: "https://www.ssbwiki.com/images/thumb/c/c8/Zelda_SSBU.png/100px-Zelda_SSBU.png", upvotes: 0 },
//         { title: "Sheik", picture: "https://www.ssbwiki.com/images/thumb/0/00/Sheik_SSBU.png/100px-Sheik_SSBU.png", upvotes: 0 },
//         { title: "Ganondorf", picture: "https://www.ssbwiki.com/images/thumb/9/91/Ganondorf_SSBU.png/99px-Ganondorf_SSBU.png", upvotes: 0 },
//         { title: "Toon Link", picture: "https://www.ssbwiki.com/images/thumb/5/56/Toon_Link_SSBU.png/95px-Toon_Link_SSBU.png", upvotes: 0 },
//         { title: "Samus", picture: "https://www.ssbwiki.com/images/thumb/0/03/Samus_SSBU.png/100px-Samus_SSBU.png", upvotes: 0 },
//         { title: "Zero Suit Samus", picture: "https://www.ssbwiki.com/images/thumb/f/f0/Zero_Suit_Samus_SSBU.png/100px-Zero_Suit_Samus_SSBU.png", upvotes: 0 },
//         { title: "Kirby", picture: "https://www.ssbwiki.com/images/thumb/0/07/Kirby_SSBU.png/100px-Kirby_SSBU.png", upvotes: 0 },
//         { title: "Meta Knight", picture: "https://www.ssbwiki.com/images/thumb/0/00/Meta_Knight_SSBU.png/100px-Meta_Knight_SSBU.png", upvotes: 0 },
//         { title: "King Dedede", picture: "https://www.ssbwiki.com/images/thumb/f/f5/King_Dedede_SSBU.png/100px-King_Dedede_SSBU.png", upvotes: 0 },
//         { title: "Fox", picture: "https://www.ssbwiki.com/images/thumb/2/2f/Fox_SSBU.png/100px-Fox_SSBU.png", upvotes: 0 },
//         { title: "Falco", picture: "https://www.ssbwiki.com/images/thumb/8/80/Falco_SSBU.png/100px-Falco_SSBU.png", upvotes: 0 },
//         { title: "Wolf", picture: "https://www.ssbwiki.com/images/thumb/8/8a/Wolf_SSBU.png/100px-Wolf_SSBU.png", upvotes: 0 },
//         ]);
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
