(function () {
'use strict';

angular.module('data')
.controller('ItemsController', ItemsController);

// Version with resolving to 1 item based on $stateParams in route config
ItemsController.$inject = ['MenuDataService', '$stateParams'];
function ItemsController(MenuDataService, $stateParams) {
  //console.log(itemList);
  var itemDetail = this;
  console.log($stateParams.itemId);
  var promise = MenuDataService.getItemsForCategory($stateParams.itemId);
  promise.then(function(result){
  itemDetail.itemsList= result.data.menu_items;
  console.log(result.data);
});



}

})();
