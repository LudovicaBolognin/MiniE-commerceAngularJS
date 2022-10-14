(function (angular) {
  "use strict";
  angular.module("MiniECommerce", ["elif", "ngRoute"])
    .config(function ($routeProvider) {
      $routeProvider
        .when("/", {
          template: "<products></products>"
        })
        .when("/:id", {
          template: "<details></details>"
        })
        .otherwise({
          redirectTo: "/"
        })
    });
})(window.angular);