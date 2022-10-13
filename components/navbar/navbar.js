(function (angular) {
  "use strict";
  angular.module("MiniECommerce")
    .component("navbar", {
      templateUrl: "components/navbar/navbar.html",
      controller: function ($scope) {
        this.prova = "Navbar";
        //observable per # prodotti presenti nel carrello
      }
    })
})(window.angular);