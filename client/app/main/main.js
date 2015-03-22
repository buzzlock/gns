'use strict';

angular.module('pBidApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl',
        resolve: {
          things: ['Thing', function(Thing) {
            return Thing.query();
          }]
        }
      });
  });