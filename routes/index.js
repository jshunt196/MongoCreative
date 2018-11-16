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

router.put('/characters/:character/upvote', function(req, res, next) {
  req.character.upvote(function(err, character){
    if (err) { return next(err); }
    res.json(character);
  });
});
// GET put WOrking
// Retrieve 10 people


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
