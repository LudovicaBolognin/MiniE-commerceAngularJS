(function (angular) {
  "use strict";
  angular.module("MiniECommerce", ["ngRoute"])
    .config(function ($routeProvider) {
      $routeProvider
        .when("", {
          template: "<products></products>"
        })
        .when("/:id", {
          template: ""
        })
        .otherwise({
          redirectTo: ""
        })
    });
})(window.angular);