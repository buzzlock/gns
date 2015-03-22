'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var FeatureSchema = new Schema({
  
  title: String,
  info: String,
  active: Boolean,
  img: {type: String, default: '/assets/images/features' + this.name}

});

module.exports = mongoose.model('Feature', FeatureSchema);