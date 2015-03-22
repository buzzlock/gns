/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var ProductCat = require('./productCat.model');

exports.register = function(socket) {
  ProductCat.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  ProductCat.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('productCat:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('productCat:remove', doc);
}