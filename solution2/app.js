(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

// LIST #1 - controller
ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var list1 = this;
    list1.items = ShoppingListCheckOffService.getToBuyItems();

  list1.buyItem = function (itemIndex) {
    ShoppingListCheckOffService.buyItem(itemIndex);

  };

  list1.flag = function(){
    return ShoppingListCheckOffService.checkMsg("buy");
  };


}


// LIST #2 - controller
AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var list2 = this;

  list2.items = ShoppingListCheckOffService.getBougthItems();

  list2.flag = function(){
    return ShoppingListCheckOffService.checkMsg("bought");
  };

};


// If not specified, maxItems assumed unlimited
function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var Items = [
      {name: 'cookies', quantity: 10},
      {name: 'cakes', quantity: 2},
      {name: 'snacks', quantity: 20},
      {name: 'breads', quantity: 25},
      {name: 'fruits', quantity: 5},
    ];


  var toBuyItems = Items;
  var boughtItems = [];
  var boughtItem;


  service.buyItem = function (itemIndex) {

    boughtItem = Items[itemIndex];
    toBuyItems.splice(itemIndex, 1);
    boughtItems.push(boughtItem);


  };

  service.checkMsg = function(type){
    var resultado = false;
    var contador = 0;
    if (type == "buy"){
        contador = toBuyItems.length;
        if (contador == 0) {
          resultado = true;
        };
    }
    else {
        contador = boughtItems.length;
        if (contador == 0) {
          resultado = true;
        };

    };

    return resultado;

  };

  service.getToBuyItems = function () {

      return toBuyItems;
  };

  service.getBougthItems = function () {
    return boughtItems;
  };
}



})();
