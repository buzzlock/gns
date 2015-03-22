/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var Core = require('../api/core/core.model');
var Role = require('../api/role/role.model');
var Theme = require('../api/theme/theme.model');
var User = require('../api/user/user.model');

var userId = function(title) {
  return User.findOne({
  title: title}, {
    _id: 1
  });
}

User.find({}).remove(function() {
  User.create({
    
    name: 'User',
    title: 'user',
    email: 'test@test.com',
    password: 'test',
    provider: 'local',
    role: 'user'
    }, {

    name: 'Admin',
    title: 'admin',
    provider: 'local',
    email: 'admin@admin.com',
    password: 'admin',
    role: 'admin'
    }, function() {
      console.log('finished populating users');
  });
});

var adminId = userId('admin');
var userId = userId('user');

Thing.find({}).remove(function() {
  Thing.create({
    name : 'Development Tools',
    info : 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.'
  }, {
    name : 'Server and Client integration',
    info : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
  }, {
    name : 'Smart Build System',
    info : 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
  },  {
    name : 'Modular Structure',
    info : 'Best practice client and server structures allow for more code reusability and maximum scalability'
  },  {
    name : 'Optimized Build',
    info : 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
  },{
    name : 'Deployment Ready',
    info : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
  });
});

Core.find({}).remove(function() {
  Core.create({
    name: 'default',
    title: 'Default',
    active: true,
    brand: 'Default',
    metaName: 'Default',
    metaContent: 'Default Online eStore Site'
  }, {
    name: 'primary',
    title: 'Primary',
    active: false,
    brand: 'Primary',
    metaName: 'Primary',
    metaContent: 'Primary Online eStore Site'
  }, {
    name: 'inverted',
    title: 'Inverted',
    active: false,
    brand: 'Inverted',
    metaName: 'Inverted',
    metaContent: 'Inverted Online eStore Site'
  }, function() {
      console.log('finished populating core');
    }
  );
});

Theme.find({}).remove(function() {
  Theme.create({
    title: 'Default',
    active: true,
    }, {
    title: 'Primary',
    active: false
    }, {
    title: 'Inverted',
    active: false
    }, function() {
    console.log('finished populating themes');
  });
});

Role.find({}).remove(function() {
  Role.create({

    name: 'Admin',
    title: 'admin',
    users: ['admin'],
    info: 'Full access to everything.',
    active: true,
    home: true,
    settings: true,
    login: true,
    signup: true,
    cp: true,
    role: true,
    user: {
      add: true,
      edit: true,
      list: true,
      view: true
    },
    task: {
      add: true,
      edit: true,
      list: true,
      view: true
    },
    product: {
      add: true,
      edit: true,
      list: true,
      view: true
    }
  }, {

    name: 'User',
    title: 'user',
    users: ['user'],
    info: 'Limited access. Customer views only.',
    active: true,
    home: true,
    settings: true,
    login: true,
    signup: true,
    cp: false,
    role: false,
    user: {
      add: false,
      edit: false,
      list: false,
      view: false
    },
    task: {
      add: false,
      edit: false,
      list: true,
      view: true
    },
    product: {
      add: false,
      edit: false,
      list: true,
      view: true
    }
  }, function() {
      console.log('finished populating roles');
  });
});