(function (angular) {
  angular.module("MiniECommerce")
    .service("productsService", ["$http", function ($http) {
      this.getProducts = async () => {
        const response = await $http({
          method: "GET",
          url: "db.json"
        });
        return response.data;
      };
    }])
})(window.angular);