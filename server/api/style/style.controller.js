/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /styles              ->  index
 * POST    /styles              ->  create
 * GET     /styles/:id          ->  show
 * PUT     /styles/:id          ->  update
 * DELETE  /styles/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var Style = require('./style.model');

// Get list of styles
exports.index = function(req, res) {
  Style.find(function (err, styles) {
    if(err) { return handleError(res, err); }
    return res.json(200, styles);
  });
};

// Get a single style
exports.show = function(req, res) {
  Style.findById(req.params.id, function (err, style) {
    if(err) { return handleError(res, err); }
    if(!style) { return res.send(404); }
    return res.json(style);
  });
};

// Creates a new style in the DB.
exports.create = function(req, res) {
  Style.create(req.body, function(err, style) {
    if(err) { return handleError(res, err); }
    return res.json(201, style);
  });
};

// Updates an existing style in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Style.findById(req.params.id, function (err, style) {
    if (err) { return handleError(res, err); }
    if(!style) { return res.send(404); }
    var updated = _.merge(style, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, style);
    });
  });
};

// Deletes a style from the DB.
exports.destroy = function(req, res) {
  Style.findById(req.params.id, function (err, style) {
    if(err) { return handleError(res, err); }
    if(!style) { return res.send(404); }
    style.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}