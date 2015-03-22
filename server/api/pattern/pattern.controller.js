/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /pattern              ->  index
 * POST    /pattern              ->  create
 * GET     /pattern/:id          ->  show
 * PUT     /pattern/:id          ->  update
 * DELETE  /pattern/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var Pattern = require('./pattern.model');

// Get list of patterns
exports.index = function(req, res) {
  Pattern.find(function (err, pattern) {
    if(err) { return handleError(res, err); }
    return res.json(200, pattern);
  });
};

// Get a single pattern
exports.show = function(req, res) {
  Pattern.findById(req.params.id, function (err, patterns) {
    if(err) { return handleError(res, err); }
    if(!pattern) { return res.send(404); }
    return res.json(patterns);
  });
};

// Creates a new pattern in the DB.
exports.create = function(req, res) {
  Pattern.create(req.body, function(err, pattern) {
    if(err) { return handleError(res, err); }
    return res.json(201, pattern);
  });
};

// Updates an existing pattern in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Pattern.findById(req.params.id, function (err, pattern) {
    if (err) { return handleError(res, err); }
    if(!pattern) { return res.send(404); }
    var updated = _.merge(pattern, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, pattern);
    });
  });
};

// Deletes a pattern from the DB.
exports.destroy = function(req, res) {
  Pattern.findById(req.params.id, function (err, pattern) {
    if(err) { return handleError(res, err); }
    if(!pattern) { return res.send(404); }
    pattern.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}