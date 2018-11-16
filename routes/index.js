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
  Character.find(function(err, characters){ // do stuff
    if(err){ return next(err); }
    res.json(characters);
  });
});

router.get('/leaderBoard', function(req, res) {
  res.json(req.character);
});


// return everything
router.get('/characters', function(req, res, next) {
  Character.find(function(err, characters){
    if(err){ return next(err); }
    res.json(characters);
  });
});
module.exports = router;
