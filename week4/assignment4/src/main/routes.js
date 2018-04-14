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
        templateUrl: 'src/main/categories/categories.template.html'
      })
      .state('categories.items', {
        url: '/{category}/items',
        templateUrl: 'src/main/items/items.template.html'
      });
  };
})();

