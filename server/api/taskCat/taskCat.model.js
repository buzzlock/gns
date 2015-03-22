'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TaskCatSchema = new Schema({
  title: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('TaskCat', TaskCatSchema);