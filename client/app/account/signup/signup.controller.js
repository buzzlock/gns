'use strict';

angular.module('pBidApp')
  .controller('SignupCtrl', function ($scope, Auth, $location, $http, socket) {
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

    $scope.cancel = function() {
      $scope.user.role = '';
      $scope.switchRol();
    }

    $scope.switchRol = function() {
      if(!$scope.showRol){
        $scope.showRol = true;
        return;
      }
      $scope.showRol = false;
    };

    $scope.addRole = function() {
      if($scope.newRole === '') {
        return;
      } 
      $http.post('/api/roles', { name: $scope.newRole });
      $http.get('/api/roles').success(function(roles) {
        $scope.roleList = roles;
        socket.syncUpdates('role', $scope.roleList);
        $scope.newRole = '';
        $scope.switchRol();      
        });
      };      

    /*$scope.delRole = function(id) {
      if(id.isAdmin) {
        $scope.alertRole = true; 
        return;
      }
      $http.delete('/api/roles/' + id);
      $http.get('/api/roles').success(function(roles) {
        $scope.roleList = roles;
        socket.syncUpdates('role', $scope.roleList);
        $scope.newRole = '';
        });
      };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('role');
    });*/

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