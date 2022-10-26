(function (angular) {
  angular.module("MiniECommerce")
    .component("cart", {
      templateUrl: "components/cart/cart.html",
      controller: cartController
    })
})(window.angular);