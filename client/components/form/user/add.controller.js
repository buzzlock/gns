'use strict';

angular.module('pBidApp')
  .controller('UserAddCtrl', function ($scope, Auth, $location, $http, socket) {
    $scope.user = {};
    $scope.errors = {};
    $scope.roleList = {};
    $scope.newRole = '';
    $scope.alertRole = false;

    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $http.get('/api/roles').success(function(roles) {
      $scope.roleList = roles;
      socket.syncUpdates('role', $scope.roleList);
    });

    $scope.switchCol = function() {
      if(!$scope.showRol){
        $scope.showRol = true;
        return;
      }
      $scope.showRol = false;
    };   

    $scope.register = function(form) {
      $scope.submitted = true;
  
      if(form.$valid) {
        Auth.createUser({
          name: $scope.user.name,
          email: $scope.user.email,
          password: $scope.user.password,
          role: $scope.user.role
        })
        .then( function() {
          // Account created, redirect to home
          $location.path('/');
        })
        .catch( function(err) {
          err = err.data;
          $scope.errors = {};

          // Update validity of form fields that match the mongoose errors
          angular.forEach(err.errors, function(error, field) {
            form[field].$setValidity('mongoose', false);
            $scope.errors[field] = error.message;
          });
        });
      }
    };
  });