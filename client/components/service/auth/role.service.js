'use strict';

angular.module('pBidApp')
  .factory('Role', function ($resource) {

    return $resource('/api/roles/:id/:controller', {
      id: '@_id'
    },
    {
      changeActive: {
        method: 'PUT',
        params: {
          controller:'active'
        }
      }
	  });
  });
