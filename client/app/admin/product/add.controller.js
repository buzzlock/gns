'use strict';

angular.module('pBidApp')
  .controller('ProductAddCtrl', function ($scope, $http, socket) {
    
    $scope.product = {};
    $scope.errors = {};     
    $scope.categoryList = [];
    $scope.colorList = [];
    $scope.patternList = [];
    $scope.styleList = [];
    $scope.bulletList = [];
    $scope.showCat = false;
    $scope.showCol = false;
    $scope.showPat - false;
    $scope.showSty = false;

    $scope.formtabs = [{
      title: 'Main',
      state: '.main'
    }, {
      title: 'Specs.',
      state: '.spec'
    }, {
      title: 'Images',
      state: '.img'
    }, {
      title: 'Warnings',
      state: '.warn'
    }];
/*
    $http.get('/api/productCats').success(function(categories) {
      $scope.categoryList = categories;
      socket.syncUpdates('productCat', $scope.categoryList);
    });*/

    /*$http.get('/api/colors').success(function(colors) {
      $scope.colorList = colors;
      socket.syncUpdates('color', $scope.colorList);
    });

    $http.get('/api/patterns').success(function(patterns) {
      $scope.patternList = patterns;
      socket.syncUpdates('pattern', $scope.patternList);
    });

    $http.get('/api/styles').success(function(styles) {
      $scope.styleList = styles;
      socket.syncUpdates('style', $scope.styleList);
    });*/

    $scope.switchCat = function() {
      if(!$scope.showCat){
        $scope.showCat = true;
        return;
      }
      $scope.showCat = false;
    }

    $scope.switchCol = function() {
      if(!$scope.showCol){
        $scope.showCol = true;
        return;
      }
      $scope.showCol = false;
    }

    $scope.switchPat = function() {
      if(!$scope.showPat){
        $scope.showPat = true;
        return;
      }
      $scope.showPat = false;
    }

    $scope.switchSty = function() {
      if(!$scope.showSty){
        $scope.showSty = true;
        return;
      }
      $scope.showSty = false;
    }

    $scope.addCategory = function() {
      if($scope.newCategory === '') {
        return;
      }/* 
      $http.post('/api/productCats', { name: $scope.newCategory });
      $http.get('/api/productCat')
        .success(function(categories) {
          $scope.categoryList = categories;
          socket.syncUpdates('category', $scope.categoryList);
          $scope.newCategory = '';
          $scope.switchCat();      
      });*/
    }

    $scope.addColor = function() {
      if($scope.newColor === '') {
        return;
      }/* 
      $http.post('/api/colors', { name: $scope.newColor });
      $http.get('/api/colors').success(function(colors) {
        $scope.colorList = colors;
        socket.syncUpdates('color', $scope.colorList);
        $scope.newColor = '';
        $scope.switchCol();      
      });*/
    }

    $scope.addPattern = function() {
      if($scope.newPattern === '') {
        return;
      } /*
      $http.post('/api/patterns', { name: $scope.newPattern });
      $http.get('/api/patterns').success(function(patterns) {
        $scope.patternList = patterns;
        socket.syncUpdates('pattern', $scope.patternList);
        $scope.newPattern = '';
        $scope.switchPat();      
      });*/
    }

    $scope.addStyle = function() {
      if($scope.newStyle === '') {
        return;
      }/* 
      $http.post('/api/styles', { name: $scope.newStyle });
      $http.get('/api/styles').success(function(styles) {
        $scope.styleList = styles;
        socket.syncUpdates('style', $scope.styleList);
        $scope.newStyle = '';
        $scope.switchSty();      
      });*/
    }

    $scope.addBullet = function(bullet) {
      if(bullet === '') {
        return;
      }
      $scope.bulletList.push(bullet);
    }

    $scope.delCategory = function(id) {
      /*$http.delete('/api/productCats/' + id);
      $http.get('/api/productCats').success(function(categories) {
        $scope.categoryList = categories;
        socket.syncUpdates('category', $scope.categoryList);
        $scope.newCategory = '';
        });*/
      }

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('category');
    });

    $scope.delColor = function(id) {
      /*$http.delete('/api/colors/' + id);
      $http.get('/api/colors').success(function(colors) {
        $scope.colorList = colors;
        socket.syncUpdates('color', $scope.colorList);
        $scope.newColor = '';
        });*/
      }

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('color');
    });

    $scope.delPattern = function(id) {
      /*$http.delete('/api/patterns/' + id);
      $http.get('/api/patterns').success(function(patterns) {
        $scope.patternList = patterns;
        socket.syncUpdates('pattern', $scope.patternList);
        $scope.newPattern = '';
        });*/
      }

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('pattern');
    });

    $scope.delStyle = function(id) {
      /*$http.delete('/api/styles/' + id);
      $http.get('/api/styles').success(function(styles) {
        $scope.styleList = styles;
        socket.syncUpdates('style', $scope.styleList);
        $scope.newStyle = '';
        });*/
      };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('style');
    });

    $scope.delBullet = function(bullet) {
      var index = $scope.bulletList.indexOf(bullet);
      if (index > -1) {
        $scope.bulletList.splice(index, 1);
      }
    }

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('bullet');
    });

    /*init();*/
  });