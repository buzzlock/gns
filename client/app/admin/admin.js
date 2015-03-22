'use strict';

angular.module('pBidApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('cp', {
        url: '/admin/cp',
        templateUrl: 'app/admin/cp/core.html',
        controller: 'CoreCtrl',
        authenticate: true
      })
      .state('cp.dev', {
        url: '^/dev',
        templateUrl: 'app/admin/cp/core.dev.html',
        authenticate: true
      })
      .state('cp.info', {
        url: '^/info',
        templateUrl: 'app/admin/cp/core.info.html',
        authenticate: true
      })
      .state('cp.ui', {
        url: '^/css',
        templateUrl: 'app/admin/cp/core.css.html',
        authenticate: true
      })
      .state('cp.feature', {
        url: '^/features',
        templateUrl: 'app/admin/cp/core.feature.html',
        authenticate: true
      })
      .state('addProduct', {
        url: '/admin/product/add',
        templateUrl: 'app/admin/product/add.html',
        controller: 'ProductAddCtrl',
        authenticate: true        
      })
      .state('addProduct.main', {
        url: '^/main',
        templateUrl: 'app/admin/product/add.main.html'      
      })
      .state('addProduct.spec', {
        url: '^/spec',
        templateUrl: 'app/admin/product/add.spec.html'     
      })
      .state('addProduct.img', {
        url: '^/img',
        templateUrl: 'app/admin/product/add.img.html'        
      })
      .state('addProduct.warn', {
        url: '^/warn',
        templateUrl: 'app/admin/product/add.warn.html'  
      })
      .state('editProduct', {
        url: '/admin/product/edit',
        templateUrl: 'app/admin/product/edit.html',
        controller: 'ProductEditCtrl',
        authenticate: true
      })
      .state('editUser', {
        url: '/admin/user/edit',
        templateUrl: 'app/admin/user/edit/edit.html',
        controller: 'UserEditCtrl',
        authenticate: true
      })
      .state('listUser', {
        url: '/admin/user/list',
        templateUrl: 'app/admin/user/list.html',
        controller: 'UserListCtrl',
        authenticate: true
      })
      .state('editRole', {
        url: '/admin/role/:id',
        templateUrl: 'app/admin/role/edit.html',
        controller: 'RoleCtrl',
        authenticate: true
      })
      .state('addTask', {
        url: '/admin/task/add',
        templateUrl: 'app/admin/task/add.html',
        controller: 'TaskAddCtrl',
        authenticate: true
      });
  });