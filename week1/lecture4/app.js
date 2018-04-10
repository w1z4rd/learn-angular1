(function () {
  'use strict';

  angular.module('myFirstApp', [])
    .controller('MyFirstController', function($scope) {
      $scope.name = "Costa";
      $scope.sayHello = function() {
        return "Hello Coursera!"
      }
    });
})();
