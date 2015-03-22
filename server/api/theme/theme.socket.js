/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Theme = require('./theme.model');

exports.register = function(socket) {
  Theme.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Theme.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('theme:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('theme:remove', doc);
}