'use strict';

var _ = require('lodash');
var Bid = require('./bid.model');

// Get list of bids
exports.index = function(req, res) {
  Bid.find(function (err, bids) {
    if(err) { return handleError(res, err); }
    return res.json(200, bids);
  });
};

// Get a single bid
exports.show = function(req, res) {
  Bid.findById(req.params.id, function (err, bid) {
    if(err) { return handleError(res, err); }
    if(!bid) { return res.send(404); }
    return res.json(bid);
  });
};

// Creates a new bid in the DB.
exports.create = function(req, res) {
  Bid.create(req.body, function(err, bid) {
    if(err) { return handleError(res, err); }
    return res.json(201, bid);
  });
};

// Updates an existing bid in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Bid.findById(req.params.id, function (err, bid) {
    if (err) { return handleError(res, err); }
    if(!bid) { return res.send(404); }
    var updated = _.merge(bid, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, bid);
    });
  });
};

// Deletes a bid from the DB.
exports.destroy = function(req, res) {
  Bid.findById(req.params.id, function (err, bid) {
    if(err) { return handleError(res, err); }
    if(!bid) { return res.send(404); }
    bid.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}