'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var BidSchema = new Schema({
  
  id: Number,
  info: String,
  active: Boolean,
  submitDate: {type: Date, default: Date.now},
  grantDate: Date,
  grantorID: {type: Schema.Types.ObjectId, ref: 'User'},
  techID: {type: Schema.Types.ObjectId, ref: 'User'}, 
  author: {type: Schema.Types.ObjectId, ref: 'User'},
  tasks: [{type: Schema.Types.ObjectId, ref: 'Task', qty: Number}],
  products: [{type: Schema.Types.ObjectId, ref: 'Product', qty: Number}],
  misc: [{
  	title: String,
  	info: String,
  	qty: Number,
  	cost: Number
  }]
  
});

module.exports = mongoose.model('Bid', BidSchema);