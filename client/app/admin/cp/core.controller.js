'use strict';

angular.module('pBidApp')
  .controller('CoreCtrl', function ($scope, $state, $http, socket) {
  	
    $scope.tabs = [{
      title: 'Main Info.',
      state: '.info'
    }, {
      title: 'API Accts.',
      state: '.dev'
    }, {
      title: 'CSS',
      state: '.ui'
    }, {
      title: 'Features',
      state: '.feature'
    }];

    $scope.siteList = [{
      name: 'Default',
      isActive: true,
      title: 'Default',
      brand: 'Default',
      theme: {
        name: 'Default',
        isActive: true
        }}, {
      name: 'Primary',
      isActive: false,
      title: 'Primary',
      brand: 'Primary',
      theme: {
        name: 'Primary',
        isActive: false
        }}, {
      name: 'Inverted',
      isActive: false,
      title: 'Inverted',
      brand: 'Inverted',
      theme: {
        name: 'Inverted',
        isActive: false
      }}];
    
    $scope.themeList = [{
      name: 'Default',
      isActive: true
    }, {
      name: 'Primary',
      isActive: false
    }, {
      name: 'Inverted',
      isActive: false
    }];

    $scope.showTheme = false;
    $scope.themeAlert = false;
    $scope.showNew = false;
    $scope.defaultAlert = false;
    $scope.navColor = '#ebebeb';

    $scope.isActive = function() {
      return route === $location.path();
    }

    $scope.activateSite = function () {
      // Add Update to DB to find isActive update to false
      $scope.site.isActive = true;
    }

    $scope.activateTheme = function () {
      // Add Update to DB to find isActive update to false
      $scope.site.theme.isActive = true;
    }

    $scope.deactivateSite = function () {
      $scope.site.isActive = false;
    }

    $scope.deactivateTheme = function () {
      $scope.site.theme.isActive = false;
    }

    $scope.addNew = function () {
      $scope.site = {};
      $scope.switchNew();
    }

    $scope.cancel = function () {
      $scope.newSite = '';
      $scope.site.name = '';
      $scope.switchNew();
    }

    $scope.copy = function () {
      $scope.switchNew();
    }

    $scope.switchNew = function() {
      if(!$scope.showNew){
        $scope.showNew = true;
        return;
      }
      $scope.showNew = false;
    }

    $scope.delSite = function() {
      if($scope.site.name === 'Default') {
        $scope.defaultAlert = true;
        return;
      }
    }

    $scope.delTheme = function() {
      var t = $scope.site.theme;
      if(t === 'default' || t === 'primary' || t === 'invert') {
        $scope.themeAlert = true;
        return;
      }
    }

  	/*$http.get('/api/sites').success(function(siteList) {
      $scope.siteList = siteList;
      socket.syncUpdates('site', $scope.siteList);
    });*/
  });
/*angular.bootstrap(document, ['gnsApp']);*/