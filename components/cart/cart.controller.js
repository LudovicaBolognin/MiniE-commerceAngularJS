const cartController = function ($scope, cartService) {
  this.finalCart = [];
  this.totalPrice = 0;

  this.$onInit = () => {
    this.finalCart = cartService.cart;
    for (let i = 0; i < this.finalCart.length; i++) {
      this.totalPrice += this.finalCart[i].price;
    }
  };

  this.onCompleteOrder = () => {
    cartService.emptyCart();
    this.finalCart = cartService.cart;
    this.totalPrice = 0;
  };

};