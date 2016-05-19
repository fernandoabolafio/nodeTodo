var mongoose = require('mongoose');

var TodoSchema =  new mongoose.Schema({
  done: Boolean,
  text : {type : String, default: ''}
});

module.exports = mongoose.model('Todo', TodoSchema);
