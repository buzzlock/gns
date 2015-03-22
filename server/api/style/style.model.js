'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var StyleSchema = new Schema({

	title: String,
	active: Boolean
});

module.exports = mongoose.model('Style', StyleSchema);