(function () {
  'use strict';
  angular.module('Data')
    .service('MenuDataService', MenuDataService);

  MenuDataService.$inject = ['$http', 'ApiBasePath'];

  function MenuDataService($http, ApiBasePath) {
    const service = this;

    service.getAllCategories = function () {
      return $http({
            method: "GET",
            url: ApiBasePath + "/categories.json"
          });
    };

    service.getItemForCategory = function(categoryShortName) {
      return $http({
        method: "GET",
        url: ApiBasePath + "/menu_items.json?category=" + categoryShortName
      });
    };
  };
})();

