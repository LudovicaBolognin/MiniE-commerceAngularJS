(function (angular) {
  "use strict";
  angular.module("MiniECommerce", ["ngRoute"])
    .config(function ($routeProvider) {
      $routeProvider
        .when("/main", {
          template: ""
        })
        .otherwise({
          redirectTo: "/main"
        })
    });
})(window.angular);