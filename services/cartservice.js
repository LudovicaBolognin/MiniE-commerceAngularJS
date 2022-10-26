(function (angular) {
  angular.module("MiniECommerce")
    .service("cartService", function () {
      this.cart = [];

      //add subject for cart.length

      this.addToCart = (product) => {
        this.cart = [...this.cart, product];
      };

      this.emptyCart = () => {
        this.cart = [];
      };
    })
})(window.angular);