'use strict';

angular.module('pBidApp')
  .controller('RoleCtrl', function ($scope, $location, Role, Auth, $http, socket) {
    /*var new Role = {};*/


    $scope.roles = Role.query();
    $scope.user = Auth.getCurrentUser();
    $scope.newRole = '';
    $scope.alertRole = false;
    $scope.home = true;
    $scope.getCurrentRoleId = Auth.getCurrentRoleId();

    /*$scope.getCurrentRoleId = function() {

      return $scope.roles.findOne({title: $scope.user.role}).exec();
    }*/

    $scope.shome = function() {
      if ($scope.home === true){
        $scope.home = false;
        return;
      }
      $scope.home = true;
      return;
    }

    $scope.addRole = function() {
      if($scope.newRole === '') {
        return;
      } 
      $http.post('/api/roles', { title: Role.title });
      $http.get('/api/roles').success(function(roles) {
        $scope.roles = roles;
        socket.syncUpdates('role', $scope.roles);
        $scope.newRole = '';     
        });
      }

    $scope.del = function(role) {
      if(role.active) {
        $scope.alertRole = true; 
        return;
      }
      $http.delete('/api/roles/' + role._id);
      $http.get('/api/roles').success(function(roles) {
        $scope.roles = roles;
        socket.syncUpdates('role', $scope.roles);
        $scope.newRole = '';
        });
      };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('role');
    });
  });