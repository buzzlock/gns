/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var pattern = require('./pattern.model');

exports.register = function(socket) {
  pattern.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  pattern.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('pattern:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('pattern:remove', doc);
}