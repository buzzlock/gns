'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ColorSchema = new Schema({
	
	title: String,
	html: String,
	active: Boolean

});

module.exports = mongoose.model('Color', ColorSchema);