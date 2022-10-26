(function (angular) {
  "use strict";
  angular.module("MiniECommerce", ["ngRoute"])
    .config(function ($routeProvider) {
      $routeProvider
        .when("/products", {
          template: "<products></products>"
        })
        .when("/products/:id/details", {
          template: "<detail></detail>"
        })
        .when("/products/cart", {
          template: "<cart></cart>"
        })
        .otherwise({
          redirectTo: "/products"
        })
    });
})(window.angular);