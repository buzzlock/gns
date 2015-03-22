/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var site = require('./site.model');

exports.register = function(socket) {
  site.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  site.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('site:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('site:remove', doc);
}