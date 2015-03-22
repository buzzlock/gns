'use strict';

angular.module('pBidApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'ui.bootstrap',
  'flow'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
    $httpProvider.interceptors.push('authInterceptor');
  })

  .config(['flowFactoryProvider', function (flowFactoryProvider) { 
    flowFactoryProvider.defaults = { 
      target: 'upload.php', permanentErrors:[404, 500, 501], minFileSize: 0 
    };
    flowFactoryProvider.on('catchAll', function (event) {
    console.log('catchAll', arguments);
  });
// You can also set default events: flowFactoryProvider.on('catchAll', function (event) { ... }); 
// Can be used with different implementations of Flow.js 
    //flowFactoryProvider.factory = fustyFlowFactory; 
  }])

  .factory('authInterceptor', function ($rootScope, $q, $cookieStore, $location) {
    return {
      // Add authorization token to headers
      request: function (config) {
        config.headers = config.headers || {};
        if ($cookieStore.get('token')) {
          config.headers.Authorization = 'Bearer ' + $cookieStore.get('token');
        }
        return config;
      },

      // Intercept 401s and redirect you to login
      responseError: function(response) {
        if(response.status === 401) {
          $location.path('/login');
          // remove any stale tokens
          $cookieStore.remove('token');
          return $q.reject(response);
        }
        else {
          return $q.reject(response);
        }
      }
    };
  })

  .run(function ($rootScope, $location, Auth) {
    // Redirect to login if route requires auth and you're not logged in
    $rootScope.$on('$stateChangeStart', function (event, next) {
      Auth.isLoggedInAsync(function(loggedIn) {
        if (next.authenticate && !loggedIn) {
          $location.path('/login');
        }
      });
    });
  });
  /*
  .controller('IndexCtrl', function ($scope, $http, socket) {
    Site.query(function(data) {
      $scope.site = data;
    });
  });*/