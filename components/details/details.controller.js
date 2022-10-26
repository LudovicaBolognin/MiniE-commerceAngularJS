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
  }

  this.onBack = () => {
    $location.path(`products`);
  }

  this.onAddToCart = (item) => {
    cartService.addToCart(item);
  }
}