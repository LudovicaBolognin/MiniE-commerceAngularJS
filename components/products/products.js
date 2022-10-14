(function (angular) {
  "use strict";
  angular.module("MiniECommerce")
    .component("products", {
      templateUrl: "components/products/products.html",
      controller: productsController
    })

})(window.angular);