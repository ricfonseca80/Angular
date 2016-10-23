(function () {
'use strict';

angular.module('data')
.component('categoriesComp', {
  templateUrl: 'src/menulist/templates/categories.comp.html',
  bindings: {
    categs: '<'
  }
});

})();
