const detailsController = function ($scope, productsService, $routeParams, $location, cartService) {
  this.productsArray = [];
  this.product = [];

  this.loadProduct = async () => {
    const response = await productsService.getProducts();
    this.productsArray = response.products;
    this.product = this.productsArray.filter(ele => ele.id === parseInt($routeParams.id));
    $scope.$apply();
  }

  this.$onInit = () => {
    this.loadProduct();
    this.startCounting = (new Date()).getSeconds();
  }

  this.onBack = () => {
    $location.path(`products`);
  }

  this.onAddToCart = (item) => {
    cartService.addToCart(item);
    this.showToast();
  }

  this.showToast = () => {
    let toast = document.querySelector('.toast');
    new bootstrap.Toast(toast).show();
  }
}