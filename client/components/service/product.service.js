'use strict';

angular.module('pBidApp')
  .factory('Product', function ($resource) {
    return $resource('/api/products/:id/:controller', {
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
