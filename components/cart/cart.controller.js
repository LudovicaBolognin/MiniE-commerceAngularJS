const cartController = function ($scope, cartService) {
  this.cart = [];
  this.totalPrice = 0;

  this.$onInit = () => {
    this.cart = cartService.cart;
    for (let i = 0; i < this.cart.length; i++) {
      this.totalPrice += this.cart[i].price;
    }
  };

  this.onCompleteOrder = () => {
    cartService.emptyCart();
    this.cart = cartService.cart;
    this.totalPrice = 0;
  };

};