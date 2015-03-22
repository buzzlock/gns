'use strict';

angular.module('pBidApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth) {
    $scope.menu = [{
      title: 'Home',
      state: 'main'
    }, {
      title: 'Tasks',
      state: 'listTask'
    }, {
      title: 'Products',
      state: 'listProduct'
    }];

    $scope.userMenu = [{
      title: 'User List',
      state: 'listUser'
    },{
      title: 'Add New User',
      state: 'signup'
    }];

    $scope.prodMenu = [{
      title: 'Product List',
      state: 'listProduct'
    }, {
      title: 'Add New Product',
      state: 'addProduct.main'
    }];

    $scope.taskMenu = [{
      title: 'Task List',
      state: 'listTask'
    }, {
      title: 'Add New Task',
      state: 'addTask'
    }];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;
    $scope.getCurrentRoleId = Auth.getCurrentRoleId;

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });