(function() {
  "use strict";

  angular.module('public')
  .controller('MyInfoController', MyInfoController);

  MyInfoController.$inject = ['formInfo','ApiPath'];
  function MyInfoController(formInfo, ApiPath) {
    var $ctrl = this;
    $ctrl.basePath = ApiPath;
    console.log(formInfo);

    $ctrl.reg = formInfo;
    // console.log($ctrl.reg);
  };

})();
