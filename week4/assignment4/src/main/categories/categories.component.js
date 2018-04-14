(function () {
  'use strict';
  angular.module('Data')
    .component('categories', {
      templateUrl: 'src/main/categories/categories.template.html',
      bindings: {
        categories: '<'
      }
    });

})();

