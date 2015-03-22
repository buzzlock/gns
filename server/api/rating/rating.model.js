'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var RatingSchema = new Schema({
  
  title: String,
  rating: Number,
  active: Boolean

});

module.exports = mongoose.model('Rating', RatingSchema);