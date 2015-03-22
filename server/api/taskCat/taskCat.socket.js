/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var TaskCat = require('./taskCat.model');

exports.register = function(socket) {
  TaskCat.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  TaskCat.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('taskCat:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('taskCat:remove', doc);
}