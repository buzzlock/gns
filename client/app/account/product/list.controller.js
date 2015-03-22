'use strict';

angular.module('pBidApp')
  .controller('ProductListCtrl', function ($scope, $http, Auth, User) {

    // Use the User $resource to fetch all users
    /*$scope.products = Product.query();*/
    
    $scope.delete = function(user) {
      User.remove({ id: user._id });
      angular.forEach($scope.products, function(u, i) {
        if (u === products) {
          $scope.products.splice(i, 1);
        }
      });
    };
  });
