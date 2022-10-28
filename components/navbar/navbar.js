(function (angular) {
  "use strict";
  angular.module("MiniECommerce")
    .component("navbar", {
      templateUrl: "components/navbar/navbar.html",
      controller: function ($scope, cartService) {
        this.numberOfProducts = 0;

        this.$onInit = () => {
          this.cartSub = cartService.cartObs.subscribe(productsArray => {
            this.numberOfProducts = productsArray.length;
          });
        };

        this.$onDestroy = () => {
          this.cartSub.unsubscribe();
        };
      }
    })
})(window.angular);