(function() {
  'use strict';

  angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.checkLunch = function() {
      const items = ($scope.itemList || "").split(',')
        .map(s => s.trim())
        .filter(s => s !== '');
      console.log(items)
      $scope.message = computeMessage(items);
    };
  };

  function computeMessage(items) {
    switch(items.length) {
      case 0:
        return {text: "Please enter data first", success: false};
      case 1:
      case 2:
      case 3:
        return {text: "Enjoy!", success: true};
      default:
        return {text: "Too much!", success: true};
    }
  }

})();
