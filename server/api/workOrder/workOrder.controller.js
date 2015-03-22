'use strict';

var _ = require('lodash');
var WorkOrder = require('./workOrder.model');

// Get list of workOrders
exports.index = function(req, res) {
  WorkOrder.find(function (err, workOrders) {
    if(err) { return handleError(res, err); }
    return res.json(200, workOrders);
  });
};

// Get a single workOrder
exports.show = function(req, res) {
  WorkOrder.findById(req.params.id, function (err, workOrder) {
    if(err) { return handleError(res, err); }
    if(!workOrder) { return res.send(404); }
    return res.json(workOrder);
  });
};

// Creates a new workOrder in the DB.
exports.create = function(req, res) {
  WorkOrder.create(req.body, function(err, workOrder) {
    if(err) { return handleError(res, err); }
    return res.json(201, workOrder);
  });
};

// Updates an existing workOrder in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  WorkOrder.findById(req.params.id, function (err, workOrder) {
    if (err) { return handleError(res, err); }
    if(!workOrder) { return res.send(404); }
    var updated = _.merge(workOrder, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, workOrder);
    });
  });
};

// Deletes a workOrder from the DB.
exports.destroy = function(req, res) {
  WorkOrder.findById(req.params.id, function (err, workOrder) {
    if(err) { return handleError(res, err); }
    if(!workOrder) { return res.send(404); }
    workOrder.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}