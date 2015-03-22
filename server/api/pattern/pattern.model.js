'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PatternSchema = new Schema({

	title: String,
	active: Boolean
});

module.exports = mongoose.model('Pattern', PatternSchema);