/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var core = require('./core.model');

exports.register = function(socket) {
  core.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  core.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('core:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('core:remove', doc);
}