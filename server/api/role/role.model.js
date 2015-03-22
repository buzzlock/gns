'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var RoleSchema = new Schema({
  
  name: {type: String, min: 2, max: 20},
  title: {type: String, min: 2, max: 20},
  info: {type: String, min: 2, max: 200},
  active: {type: Boolean, default: false},
  users: [{type: Schema.Types.ObjectId, ref: 'User'}],
  home: {type: Boolean, default: true},
  settings: {type: Boolean, default: true},
  login: {type: Boolean, default: true},
  signup: {type: Boolean, default: true},
  cp: {type: Boolean, default: false},
  role: {type: Boolean, default: false},
  user: {
  	add: {type: Boolean, default: false},
  	edit: {type: Boolean, default: false},
  	list: {type: Boolean, default: false},
  	view: {type: Boolean, default: false}
  },
  task: {
  	add: {type: Boolean, default: false},
  	edit: {type: Boolean, default: false},
  	list: {type: Boolean, default: true},
  	view: {type: Boolean, default: true}
  },
  product: {
  	add: {type: Boolean, default: false},
  	edit: {type: Boolean, default: false},
  	list: {type: Boolean, default: true},
  	view: {type: Boolean, default: true}
  }
   
});

module.exports = mongoose.model('Role', RoleSchema);