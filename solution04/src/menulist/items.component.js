(function () {
'use strict';

angular.module('data')
.component('items', {
  templateUrl: 'src/menulist/templates/items.comp.html',
  bindings: {
    categitems: '<'
  }
});

})();
