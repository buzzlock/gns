'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TaskSchema = new Schema({
  
  title: String,
  info: String,
  category: String,
  terms: String,
  retailWarranty: Number,
  retailPrice: Number,
  active: Boolean,
  comments: [{ 
    body: String,
    date: {type: Date, default: Date.now},
    user: { type: Schema.Types.ObjectId, ref: 'User' }
  }],
  ratings: [{ 
    value: {type: Number, max: 5, min: 1},
    date: {type: Date, default: Date.now},
    user: { type: Schema.Types.ObjectId, ref: 'User' }
  }],
  products: [{ 
    type: Schema.Types.ObjectId,
    ref: 'Product',
    qty: Number,
    markup: Number,
    laborMin: Number
  }],
  extratask: [{ 
    title: String, 
    qty: Number, 
    laborHrs: Number 
  }],
  tools: [{ 
    type: Schema.Types.ObjectId, 
    ref: 'Tool', 
    qty: Number 
  }],
  imgs: [{ 
  	title: String,
  	alt: String,
  	imgURL: String,
  	linkURL: String
  }]  
});

module.exports = mongoose.model('Task', TaskSchema);