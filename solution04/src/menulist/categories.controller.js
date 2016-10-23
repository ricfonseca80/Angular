(function () {
'use strict';

angular.module('data')
.controller('CategoriesController', CategoriesController);


CategoriesController.$inject = ['categList'];
function CategoriesController(categList) {
  var ctrlCateg = this;
  ctrlCateg.categList = categList.data;
//console.log(ctrlCateg.categList);
}

})();
