'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CoreSchema = new Schema({

	title: String,
	active: Boolean,
	brand: String,
	logo: {
		title: String,
		alt: String,
		imgURL: String,
		linkURL: String
	},
	features: [{
		title: String,
		info: String,
		active: Boolean,
		bullets: [String],
		imgs: [{
			title: String,
			alt: String,
			active: Boolean,
			imgURL: String,
			linkURL: String
		}]
	}],
	metaName: String,
	metaContent: String,
	theme: {type: String, ref: 'theme'},
	account: {
		facebook: {
			id: String,
			secret: String
		},
		google: {
			id: String,
			secret: String
		},
		twitter: {
			id: String,
			secret: String
		},
		homedepot: {
			id: String,
			secret: String
		},
		paypal: {
			id: String,
			secret: String
		}
	}
});

module.exports = mongoose.model('Core', CoreSchema);