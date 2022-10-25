const detailsController = function ($scope, productsService, $routeParams, $location) {

  this.productsArray = [];
  this.selectedProduct = [];

  this.getSelectedProduct = async () => {
    const product = await productsService.getProducts();
    this.productsArray = product.products;
    this.selectedProduct = this.productsArray.filter(ele => ele.id === +$routeParams.id);
    $scope.$apply();
  }

  this.$onInit = () => {
    this.getSelectedProduct();
  }

  this.onBack = () => {
    $location.path(`products`);
  }

  this.onAddToCart = () => {
    //need to create a cart service
  }
}