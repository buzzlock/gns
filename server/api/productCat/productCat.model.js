'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ProductCatSchema = new Schema({
  
  title: String,
  info: String,
  active: Boolean

});

module.exports = mongoose.model('ProductCat', ProductCatSchema);