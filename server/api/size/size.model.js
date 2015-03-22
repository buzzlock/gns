'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var SizeSchema = new Schema({
  
  size: String,
  format: {type: String, default: 'in'}
});

module.exports = mongoose.model('Size', SizeSchema);