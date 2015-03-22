'use strict';

angular.module('pBidApp')
  .factory('Core', function ($resource) {
    return $resource('/api/cores/:id/:controller', {
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
