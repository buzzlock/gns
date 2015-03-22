'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ProductSchema = new Schema({
  
  title: String,
  info: String,
  active: Boolean,
  upc: 	String,
  sku: 	String,
  model: String,
  warning: String,
  inventory: Number,
  retailWarranty: Number,
  purchaseWarranty: Number,
  purchaseDate: Date,
  approvals: [String], 
  keywords: [String],
  bullets: [String],
  categories: [{type: Schema.Types.ObjectId, ref: 'ProductCat'}],
  colors: [{type: Schema.Types.ObjectId, ref: 'Color'}],
  patterns: [{type: Schema.Types.ObjectId, ref: 'Pattern'}],
  sizes: [{type: Schema.Types.ObjectId, ref: 'Size'}],
  styles: [{type: Schema.Types.ObjectId, ref: 'Style'}],
  tools: [{type: Schema.Types.ObjectId, ref: 'Tool'}],
  imgs: 
  [{
      imgUrl: String,
      linkUrl: String,
      alt: String,
      tags: [String],
      active: Boolean
  }],
  prodDem: {
  	width: Number,
  	length: Number,
  	height: Number,
  	weight: {
      lbs: Number,
      oz: Number
    }
  },
  packDem: {
  	width: Number,
  	length: Number,
  	height: Number,
  	weight: {
      lbs: Number,
      oz: Number
    }
  },
  price: { 
    purchase: Number,
    maxdiscount: Number,
    markup: Number
  },
  discountDate: {
    start: {type: Date, default: Date.now},
    end: Date
  }
     
});

module.exports = mongoose.model('Product', ProductSchema);