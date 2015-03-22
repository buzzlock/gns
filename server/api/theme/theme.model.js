'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ThemeSchema = new Schema({
	_creator : { type: Schema.Types.ObjectId, ref: 'Core' },
	title: String,
	active: {type: Boolean, default: false},
	sites: [{ type: Schema.Types.ObjectId, ref: 'Core' }]
});

module.exports = mongoose.model('Theme', ThemeSchema);