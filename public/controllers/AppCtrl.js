angular.module('spooky-children')

.controller('AppCtrl', [ 'products', 'images', 'cart', function(products, images, cart) {
  this.getDolls = products.get;
  this.getImages = images.get;
  this.addToCart = cart.add;

  (function init() {
    products.fetch()
    .then(dolls => {
      images.fetch(dolls);
    })
  })();
}]);