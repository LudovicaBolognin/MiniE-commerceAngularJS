(function (angular) {
  angular.module("MiniECommerce")
    .service("myService", ["$http", function ($http) {
      this.getProducts = async function getAll() {
        const response = await $http({
          method: "GET",
          url: "db.json"
        });
        return response.data;
      };
    }])
})(window.angular);