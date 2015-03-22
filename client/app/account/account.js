'use strict';

angular.module('pBidApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'app/account/login/login.html',
        controller: 'LoginCtrl'
      })
      .state('signup', {
        url: '/signup',
        templateUrl: 'app/account/signup/signup.html',
        controller: 'SignupCtrl'
      })
      .state('settings', {
        url: '/settings',
        templateUrl: 'app/account/settings/settings.html',
        controller: 'SettingsCtrl',
        authenticate: true
      })
      .state('listTask', {
        url: '/task',
        templateUrl: 'app/account/task/list.html',
        controller: 'TaskListCtrl'
      })
      .state('viewTask', {
        url: '/task/:id',
        templateUrl: 'app/account/task/view.html',
        controller: 'TaskViewCtrl'
      })
      .state('listProduct', {
        url: '/product',
        templateUrl: 'app/account/product/list.html',
        controller: 'ProductListCtrl'
      })
      .state('viewProduct', {
        url: '/product/:id',
        templateUrl: 'app/account/product/view.html',
        controller: 'ProductViewCtrl'
      });
  });