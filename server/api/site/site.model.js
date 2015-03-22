'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var SiteSchema = new Schema({
  name: String,
  active: Boolean,
  themes: [{ 
    type: Schema.Types.ObjectId, 
    ref: 'Theme' 
  }],
  brand: String,
  title: String,  
  metaName: String,
  metaContent: String,
  fbID: String,
  fbSecret: String,
  gpID: String,
  gpSecret: String,
  ttID: String,
  ttSecret: String,
  ppID: String,
  ppSecret: String
});

module.exports = mongoose.model('Site', SiteSchema);