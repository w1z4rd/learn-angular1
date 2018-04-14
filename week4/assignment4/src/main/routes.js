(function (){
  'use strict';

  angular.module('MenuApp')
    .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'src/main/menuapp/home.template.html'
      })
      .state('categories', {
        url: '/categories',
        templateUrl: 'src/main/categories/categories.template.html',
        controller: 'CategoriesController as categories',
        resolve: {
          categories: ['MenuDataService',
                       function(MenuDataService) {
                         return MenuDataService.getAllCategories();
                       }
          ]
        }
      })
      .state('categories.items', {
        url: '/{categoryShortName}/items',
        templateUrl: 'src/main/items/items.template.html',
        controller: 'ItemsController as items',
        resolve: {
          items: ['$stateParams', 'MenuDataService',
                  function($stateParams, MenuDataService) {
                    return MenuDataService.getItemForCategory($stateParams.categoryShortName);
                  }]
        }
      });
  };
})();

