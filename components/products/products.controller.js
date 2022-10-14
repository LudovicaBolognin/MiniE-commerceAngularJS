const productsController = function ($scope, productsService, $location) {
  this.productsArray = [];

  this.getAllProducts = async () => {
    const res = await productsService.getProducts();
    this.productsArray = res.products;
    $scope.$apply();
  };

  this.$onInit = () => {
    this.getAllProducts();
  };

  this.onDetails = (id) => {
    $location.path(`/${id}`);
  };

};