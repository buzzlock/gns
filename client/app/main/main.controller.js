'use strict';

angular.module('pBidApp')
  .controller('MainCtrl', function ($scope, $http, socket, things) {
    $scope.things = things;

    /*$http.get('/api/things').success(function(things) {
      $scope.awesomeThings = awesomeThings;
      socket.syncUpdates('thing', $scope.things);
    });*/
    
    $scope.myInterval = 9000;
    var slides = $scope.slides = [];

    $scope.addSlide = function() {
      var newWidth = 600 + slides.length + 1;
      slides.push({
        image: 'http://placekitten.com/' + newWidth + '/300',
        text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
          ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
      });
    };    

    $scope.info = function(thing) {
      $scope.info = '';
      $scope.infom = thing.info;
    };

    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('thing');
    });

    for (var i=0; i<4; i++) {
      $scope.addSlide();
    };
  });
