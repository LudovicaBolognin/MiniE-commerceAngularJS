(function (angular) {
  angular.module("MiniECommerce")
    .service("cartService", function () {
      this._cartArray = [];
      this._cartSubject = new rxjs.BehaviorSubject(this._cartArray);
      this.cartObs = this._cartSubject.asObservable();

      this.addToCart = (product) => {
        this._cartArray.push(product);
        this._cartSubject.next(this._cartArray);
      };

      this.emptyCart = () => {
        this._cartArray = [];
        this._cartSubject.next(this._cartArray);
      };
    })
})(window.angular);