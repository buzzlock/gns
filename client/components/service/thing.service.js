'use strict';

angular.module('pBidApp')
  .factory('Thing', function ($resource) {
    return $resource('/api/things/:id/:controller', {
      id: '@_id'
    });
  });
