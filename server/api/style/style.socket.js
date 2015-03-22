/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var style = require('./style.model');

exports.register = function(socket) {
  style.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  style.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('style:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('style:remove', doc);
}