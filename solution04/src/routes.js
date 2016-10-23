(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menulist/templates/home.template.html'
  })

  // Premade list page
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/menulist/templates/categories.template.html',
    controller: 'CategoriesController as ctrlCateg',
    resolve: {
      categList: ['MenuDataService', function (MenuDataService) {
                                        return MenuDataService.getAllCategories();
                                      }]}
  })

  // Item detail
  .state('categories.items', {
    url: '/items/{itemId}',
    templateUrl: 'src/menulist/templates/items.template.html',
    controller: 'ItemsController as ctrlItems',
    params: {
      itemId: null
    },
  });

}

})();
