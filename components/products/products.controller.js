const productsController = function ($scope, productsService, $location) {
  this.productsArray = [];

  this.getAllProducts = async () => {
    const prods = await productsService.getProducts();
    this.productsArray = prods.products;
    $scope.$apply();
  };

  this.$onInit = () => {
    this.getAllProducts();
  };

  this.goToDetails = (id) => {
    $location.path(`/${id}`);
  };

};