'use strict';

angular.module('pBidApp')
  .factory('Task', function ($resource) {
    return $resource('/api/tasks/:id/:controller', {
      id: '@_id'
    },
    {
      changePassword: {
        method: 'PUT',
        params: {
          controller:'password'
        }
      }
	  });
  });
