angular.module('spooky-children')

.controller('AppCtrl', [ 'products', 'images', function(products, images) {
  this.getDolls = products.get;
  this.getImages = images.get;

  (function init() {
    products.fetch()
    .then(dolls => {
      images.fetch(dolls);
    })
  })();
}]);