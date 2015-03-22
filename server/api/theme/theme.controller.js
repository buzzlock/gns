'use strict';

var _ = require('lodash');
var Theme = require('./theme.model');

// Get list of themes
exports.index = function(req, res) {
  Theme.find(function (err, themes) {
    if(err) { return handleError(res, err); }
    return res.json(200, themes);
  });
};

// Get a single theme
exports.show = function(req, res) {
  Theme.findById(req.params.id, function (err, theme) {
    if(err) { return handleError(res, err); }
    if(!theme) { return res.send(404); }
    return res.json(theme);
  });
};

// Creates a new theme in the DB.
exports.create = function(req, res) {
  Theme.create(req.body, function(err, theme) {
    if(err) { return handleError(res, err); }
    return res.json(201, theme);
  });
};

// Updates an existing theme in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Theme.findById(req.params.id, function (err, theme) {
    if (err) { return handleError(res, err); }
    if(!theme) { return res.send(404); }
    var updated = _.merge(theme, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, theme);
    });
  });
};

// Deletes a theme from the DB.
exports.destroy = function(req, res) {
  Theme.findById(req.params.id, function (err, theme) {
    if(err) { return handleError(res, err); }
    if(!theme) { return res.send(404); }
    theme.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}