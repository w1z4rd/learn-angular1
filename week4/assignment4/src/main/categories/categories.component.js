(function () {
  'use strict';
  angular.module('Data')
    .component('categories', {
      templateUrl: 'src/categories/categories.template.html',
      bindings: {
        categories: '<'
      }
    });

})();

