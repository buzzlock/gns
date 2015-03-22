'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ToolSchema = new Schema({ 
  
  title: String,
  info: String,
  active: Boolean,
  imgs: [{
  	title: String,
  	alt: String,
    imgURL: String,
  	linkURL: String
  }]
});

module.exports = mongoose.model('Tool', ToolSchema);