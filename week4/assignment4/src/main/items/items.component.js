(function () {
  angular.module('Data')
    .component('items', {
      templateUrl: 'src/main/items/items.template.html',
      bindings: {
        items: '<',
        categoryName: '@'
      }
    });
})();

