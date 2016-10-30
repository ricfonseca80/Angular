(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };

  service.saveForm = function (formValues) {
    // console.log('Form Values in Service:',formValues);
    service.firstname = formValues.user.firstname;
    // console.log(formValues.user.firstname);
    // console.log(service.firstName)
    service.lastname = formValues.user.lastname;
    service.email = formValues.user.email;
    service.phone = formValues.user.phone;
    // var menuItem = formValues.menuItem;

  };

  service.checkMenuExist = function(menuItem){
    // var config = {};
    // if (menuItem) {
    //   config.params = {'category': menuItem};
    // }

    return $http.get(ApiPath + '/menu_items/' + menuItem +'.json')
    .then(
      function (response) {
        service.menuitem=response.data;
        return true;
      },
      function(response){
        return false;
    });
  };

  service.getFormInfo = function () {
    // console.log(formValues);
    var user = {};
    user = {user: {
    firstname: service.firstname,
    lastname: service.lastname,
    email: service.email,
    phone: service.phone,
    menuItemName: service.menuitem.name,
    menuItemDescription:service.menuitem.description,
    menuItemShortName: service.menuitem.short_name}};
    // var menuItem = formValues.menuItem;
    return user;
  };


}



})();
