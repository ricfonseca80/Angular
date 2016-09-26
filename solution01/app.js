(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LuchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.name = ""
  $scope.mTooMuch = "";

  $scope.checkTooMuch = function () {
      var meals = split($scope.name);

    var totalMeals = meals.length

    if totalMeals <= 3
      $scope.msgMeals = "Enjoy!"
    else {
      $scope.msgMeals = "Too much!"
    }
    end


  }



}

})();
