(function() {
  "use strict";

  angular.module('public')
  .controller('MyInfoFormController', MyInfoFormController);

  MyInfoFormController.$inject = ['MenuService'];
  function MyInfoFormController(MenuService) {
    var $ctrl = this;


    $ctrl.submit = function (menuItem) {
      // console.log($ctrl);
      var promise;
      promise = MenuService.checkMenuExist(menuItem);
      promise.then(function(response){
        if (response) {
          console.log('menuExist inside if:', response);
          MenuService.saveForm($ctrl.reg);
          $ctrl.info = "Your information has been saved";
          $ctrl.reg.completed=true;
        }
        else{
          console.log('menuExist inside if:', response);
          // MenuService.saveForm($ctrl.reg);
          $ctrl.info = "Error:Check information provided";
          $ctrl.reg.completed=false;


        }


      })

    };

  }

})();
