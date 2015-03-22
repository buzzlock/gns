'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CommentSchema = new Schema({
  
  title: String,
  info: String,
  rating: Number,
  active: Boolean

});

module.exports = mongoose.model('Comment', CommentSchema);