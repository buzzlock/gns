/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /sites              ->  index
 * POST    /sites              ->  create
 * GET     /sites/:id          ->  show
 * PUT     /sites/:id          ->  update
 * DELETE  /sites/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var Site = require('./site.model');

// Get list of sites
exports.index = function(req, res) {
  Site.find(function (err, sites) {
    if(err) { return handleError(res, err); }
    return res.json(200, sites);
  });
};

// Get a single site
exports.show = function(req, res) {
  Site.findById(req.params.id, function (err, site) {
    if(err) { return handleError(res, err); }
    if(!site) { return res.send(404); }
    return res.json(site);
  });
};

// Creates a new site in the DB.
exports.create = function(req, res) {
  Site.create(req.body, function(err, site) {
    if(err) { return handleError(res, err); }
    return res.json(201, site);
  });
};

// Updates an existing site in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Site.findById(req.params.id, function (err, site) {
    if (err) { return handleError(res, err); }
    if(!site) { return res.send(404); }
    var updated = _.merge(site, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, site);
    });
  });
};

// Deletes a site from the DB.
exports.destroy = function(req, res) {
  Site.findById(req.params.id, function (err, site) {
    if(err) { return handleError(res, err); }
    if(!site) { return res.send(404); }
    site.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}