'use strict';

var _ = require('lodash');
var ProductCat = require('./productCat.model');

// Get list of productCats
exports.index = function(req, res) {
  ProductCat.find(function (err, productCats) {
    if(err) { return handleError(res, err); }
    return res.json(200, productCats);
  });
};

// Get a single productCat
exports.show = function(req, res) {
  ProductCat.findById(req.params.id, function (err, productCat) {
    if(err) { return handleError(res, err); }
    if(!productCat) { return res.send(404); }
    return res.json(productCat);
  });
};

// Creates a new productCat in the DB.
exports.create = function(req, res) {
  ProductCat.create(req.body, function(err, productCat) {
    if(err) { return handleError(res, err); }
    return res.json(201, productCat);
  });
};

// Updates an existing productCat in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  ProductCat.findById(req.params.id, function (err, productCat) {
    if (err) { return handleError(res, err); }
    if(!productCat) { return res.send(404); }
    var updated = _.merge(productCat, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, productCat);
    });
  });
};

// Deletes a productCat from the DB.
exports.destroy = function(req, res) {
  ProductCat.findById(req.params.id, function (err, productCat) {
    if(err) { return handleError(res, err); }
    if(!productCat) { return res.send(404); }
    productCat.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}