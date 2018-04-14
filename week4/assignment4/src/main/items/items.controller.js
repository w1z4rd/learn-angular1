(function (){
  'use strict';

  angular.module('Data')
    .controller('ItemsController', ItemsController);

  ItemsController.$inject = ['items', 'categoryName'];
  function ItemsController(items, categoryName) {
    const ctrl = this;

    console.log(categoryName);
    ctrl.items = items.data.menu_items;
    ctrl.categoryName = categoryName;
  };
})();
