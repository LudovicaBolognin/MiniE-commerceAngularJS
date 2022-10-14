const productsController = function ($scope, myService, $location) {
  this.arrayProducts = [];

  this.getAllProducts = async () => {
    const prods = await myService.getProducts();
    this.arrayProducts = prods.products;
    $scope.$apply();
  };

  this.$onInit = () => {
    this.getAllProducts();
  };

  this.goToDetails = (id) => {
    $location.path(`/${id}`);
  };

};