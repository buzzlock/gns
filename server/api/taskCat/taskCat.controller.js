'use strict';

var _ = require('lodash');
var TaskCat = require('./taskCat.model');

// Get list of taskCats
exports.index = function(req, res) {
  TaskCat.find(function (err, taskCats) {
    if(err) { return handleError(res, err); }
    return res.json(200, taskCats);
  });
};

// Get a single taskCat
exports.show = function(req, res) {
  TaskCat.findById(req.params.id, function (err, taskCat) {
    if(err) { return handleError(res, err); }
    if(!taskCat) { return res.send(404); }
    return res.json(taskCat);
  });
};

// Creates a new taskCat in the DB.
exports.create = function(req, res) {
  TaskCat.create(req.body, function(err, taskCat) {
    if(err) { return handleError(res, err); }
    return res.json(201, taskCat);
  });
};

// Updates an existing taskCat in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  TaskCat.findById(req.params.id, function (err, taskCat) {
    if (err) { return handleError(res, err); }
    if(!taskCat) { return res.send(404); }
    var updated = _.merge(taskCat, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, taskCat);
    });
  });
};

// Deletes a taskCat from the DB.
exports.destroy = function(req, res) {
  TaskCat.findById(req.params.id, function (err, taskCat) {
    if(err) { return handleError(res, err); }
    if(!taskCat) { return res.send(404); }
    taskCat.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}