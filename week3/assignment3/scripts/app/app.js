(function() {
  angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .controller('FoundItemsDirectiveController', FoundItemsDirectiveController)
    .service('MenuSearchService', MenuSearchService)
    .directive('foundItems', FoundItemsDirective)
    .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

  NarrowItDownController.$inject = ['MenuSearchService', '$filter'];
  function NarrowItDownController(MenuSearchService, $filter) {
    const ctrl = this;

    ctrl.found = [];
    ctrl.searchTerm = "";

    ctrl.narrowItDown = function() {
      const promise =  MenuSearchService.getItems();
      promise.then(function (response) {
        const menuItems = response.data.menu_items;
        ctrl.found = $filter('filter')(menuItems, ctrl.searchTerm);
      })
      .catch(function (error) {
        console.log(error);
      });
    }

    ctrl.remove = function(index) {
      ctrl.found.splice(index, 1);
    }
  };

  MenuSearchService.$inject = ['$http', 'ApiBasePath']
    function MenuSearchService($http, ApiBasePath) {
      const service = this;

      service.getItems = function() {
        const promise = $http({
          method: "GET",
          url: (ApiBasePath + "/menu_items.json")
        })
        return promise;
      };

    };

  function FoundItemsDirective() {
    const ddo = {
      templateUrl: 'scripts/app/templates/menuList.html',
      restrict: 'E',
      scope: {
        foundItems: '<',
        onRemove: '&'
      },
      controller: FoundItemsDirectiveController,
      controllerAs: 'list',
      bindToController: true
    };
    return ddo;
  };

  function FoundItemsDirectiveController() {
    const list = this;

    list.itemsNotFound = function() {
      return list.foundItems.length == 0;
    }
  }

})();
