'use strict';

var _ = require('lodash');
var Feature = require('./feature.model');

// Get list of features
exports.index = function(req, res) {
  Feature.find(function (err, features) {
    if(err) { return handleError(res, err); }
    return res.json(200, features);
  });
};

// Get a single feature
exports.show = function(req, res) {
  Feature.findById(req.params.id, function (err, feature) {
    if(err) { return handleError(res, err); }
    if(!feature) { return res.send(404); }
    return res.json(feature);
  });
};

// Creates a new feature in the DB.
exports.create = function(req, res) {
  Feature.create(req.body, function(err, feature) {
    if(err) { return handleError(res, err); }
    return res.json(201, feature);
  });
};

// Updates an existing feature in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Feature.findById(req.params.id, function (err, feature) {
    if (err) { return handleError(res, err); }
    if(!feature) { return res.send(404); }
    var updated = _.merge(feature, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, feature);
    });
  });
};

// Deletes a feature from the DB.
exports.destroy = function(req, res) {
  Feature.findById(req.params.id, function (err, feature) {
    if(err) { return handleError(res, err); }
    if(!feature) { return res.send(404); }
    feature.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}