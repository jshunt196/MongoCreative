var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Character = mongoose.model('Character');

/*router.put('/Character/:character/upvote', function(req, res, next) {
  req.character.upvote(function(err, character){
    /*if (err) { return next(err); }
    res.json(character);
  });
});*/

router.param('character', function(req, res, next, id) {
  var query = Character.findById(id);
  query.exec(function (err, character){
    if (err) { return next(err); }
    if (!character) { return next(new Error("can't find character")); }
    req.character = character;
    return next();
  });
});

router.get('/characters/:character', function(req, res) {
  res.json(req.comment);
});

router.put('/characters/:character/upvote', function(req, res, next) {
  req.character.upvote(function(err, character){
    if (err) { return next(err); }
    res.json(character);
  });
});


router.get('/voteOptions', function(req, res, next) {
  Character.find(function(err, Characters){ // do stuff
    if(err){ return next(err); }
    res.json(Characters);
  });
});

router.get('/leaderBoard', function(req, res) {
  res.json(req.character);
});


// return everything
router.get('/Character', function(req, res, next) {
  console.log('Characters route called!');
  Character.find({}, function(err, Character){
    console.log('Length: ' + Character.length);
    if(err){ return next(err); }
    res.json(Character);
  });
});
module.exports = router;
