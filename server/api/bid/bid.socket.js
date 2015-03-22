/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Bid = require('./bid.model');

exports.register = function(socket) {
  Bid.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Bid.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('bid:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('bid:remove', doc);
}