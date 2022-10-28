const cartController = function ($scope, cartService) {
  this.cartProducts = [];
  this.totalPrice = 0;

  this.$onInit = () => {
    this.cartSub = cartService.cartObs.subscribe(productsArray => {
      this.cartProducts = productsArray;
      for (let i = 0; i < this.cartProducts.length; i++) {
        this.totalPrice += this.cartProducts[i].price;
      }
    });
  };

  this.$onDestroy = () => {
    this.cartSub.unsubscribe();
  }

  this.onCompleteOrder = () => {
    cartService.emptyCart();
    this.totalPrice = 0;
  };

};