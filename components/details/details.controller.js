const detailsController = function ($scope, productsService, $routeParams, $location) {

  this.productsArray = [];
  this.product = [];

  this.loadProduct = async () => {
    const response = await productsService.getProducts();
    this.productsArray = response.products;
    this.product = this.productsArray.filter(ele => ele.id === +$routeParams.id);
    $scope.$apply();
  }

  this.$onInit = () => {
    this.loadProduct();
  }

  this.onBack = () => {
    $location.path(`products`);
  }

  this.onAddToCart = () => {
    //need to create a cart service
  }
}