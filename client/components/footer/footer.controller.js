'use strict';

angular.module('pBidApp')
  .controller('FooterCtrl', function ($scope) {
  	$scope.year = new Date().getFullYear();
  });