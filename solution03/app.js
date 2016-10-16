(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', foundItemsDirective)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com/");

//Directive
function foundItemsDirective() {
  var ddo = {
    templateUrl: 'menuList.html',
    scope: {
      items: '<',
      myTitle: '@title',
      flag: '@',
      onRemove: '&'
    },
    controller: foundItemsDirectiveController,
    controllerAs: 'drtList',
    bindToController: true
  };
  return ddo;
}
// DirectiveController
function foundItemsDirectiveController() {
  var drtList = this;

  drtList.narrowList = function () {
    for (var i = 0; i < drtList.items.length; i++) {
      var name = drtList.items[i].name;
      if (name.toLowerCase().indexOf("cookie") !== -1) {
        return true;
      }
    }
    return false;
  };
}
// Narrow Down - controller
NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var control1 = this;
  var restrictItems=[];
  control1.title="Type a word above and press the button";
  control1.narrowSearch = function() {
    restrictItems = [];
    var promise = MenuSearchService.getMatchedMenuItems();
    promise.then(function(response){

      var menuItems = response.data.menu_items;
      if (control1.searchTerm!==""){
        for (var i = 0; i < menuItems.length; i++) {
          var description = menuItems[i].description;
          if (description.toLowerCase().indexOf(control1.searchTerm) !== -1) {
            restrictItems.push(menuItems[i]);
          };
        };
      };
      control1.foundItems = restrictItems;
      if (control1.foundItems.length==0){
        control1.title="Nothing Found!";
      }
      else {
        control1.title="Menu Items:";
      };
    });

  };
  control1.removeItem = function (itemIndex) {
    control1.foundItems.splice(itemIndex,1);
  };



};
// Menu Search Service
MenuSearchService.$inject=['$http', 'ApiBasePath']
function MenuSearchService ($http, ApiBasePath){
  var service = this;
  service.getMatchedMenuItems = function(){

    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
    });

      return response;
  };
};


})();
