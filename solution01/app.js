(function () {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.name = ""
    $scope.msgMeals = ""

    $scope.checkTooMuch = function () {
      var meals = $scope.name.split(",")

      var totalMeals = meals.length

      if (meals==""){
        $scope.msgMeals = "Please, enter data first."
      }
      else if (totalMeals <= 3) {
        $scope.msgMeals = "Enjoy!"
      }
      else {
        $scope.msgMeals = "Too much!"
      }
    }
  }





})();
