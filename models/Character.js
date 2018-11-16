var mongoose = require('mongoose');
mongoose.set('debug', true);

var CharacterSchema = new mongoose.Schema({
  title: String,
  picture: String, //////////////////////////////////Added this
  upvotes: {type: Number, default: 0},
});
CharacterSchema.methods.upvote = function(cb) {
  this.upvotes += 1;
  this.save(cb);
};
mongoose.model('Character', CharacterSchema);
