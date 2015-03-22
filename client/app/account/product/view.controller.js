'use strict';

angular.module('pBidApp')
  .controller('ProductViewCtrl', function ($scope, $http, Auth, User) {

    // Use the User $resource to fetch all users
    /*$scope.products = Product.query();*/
    
    $scope.delete = function(user) {
      Product.remove({ id: product._id });
      angular.forEach($scope.products, function(u, i) {
        if (u === product) {
          $scope.products.splice(i, 1);
        }
      });
    };
  });
