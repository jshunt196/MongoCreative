var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Character = mongoose.model('Character');

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
router.get('/characters', function(req, res, next) {
  console.log('Characters route called!');
  Character.find({}, function(err, Characters){
    console.log('Length: ' + Characters.length);
    if(err){ return next(err); }
    res.json(Characters);
  });
});
module.exports = router;
