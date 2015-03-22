'use strict';

angular.module('pBidApp')
  .controller('ProductEditCtrl', function ($scope, $http, Auth, User) {

    $scope.heading = 'Edit Product';
    
    $scope.delete = function(user) {
      Product.remove({ id: product._id });
      angular.forEach($scope.products, function(u, i) {
        if (u === user) {
          $scope.products.splice(i, 1);
        }
      });
    };
  });