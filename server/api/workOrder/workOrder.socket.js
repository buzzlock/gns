/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var WorkOrder = require('./workOrder.model');

exports.register = function(socket) {
  WorkOrder.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  WorkOrder.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('workOrder:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('workOrder:remove', doc);
}