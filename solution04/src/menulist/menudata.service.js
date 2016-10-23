(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService);

MenuDataService.$inject = ['$http', 'ApiBasePath']
function MenuDataService($http, ApiBasePath) {
  var service = this;

  // Simulates call to server
  // Returns a promise, NOT items array directly
  service.getAllCategories = function () {
    var response =
      $http({
        method: "GET",
        url: (ApiBasePath + "categories.json")
      });

    return response;



  };

  service.getItemsForCategory = function (categoryShortName){
    var response =
      $http({
        method: "GET",
        url: (ApiBasePath + "menu_items.json"),
        params: {category: categoryShortName}
      });

    return response;
  }

}

})();
