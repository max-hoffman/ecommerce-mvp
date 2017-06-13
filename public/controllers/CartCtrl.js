angular.module('spooky-children')

.controller('CartCtrl', [ 'cart', function(cart) {
  this.getCart = cart.get;

  (function init() {
    cart.fetch()
    .then(cart => this.cart = cart);
  })();
}]);