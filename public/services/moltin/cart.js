angular.module('spooky-children')

.service('images', [ '$http', function($http) {
  var images = {};

  return {
    get: () => images,
    add: (doll) => {
      Moltin.Cart.AddProduct(doll.id, 1)
      .then((item) => {
        alert(`Added ${item.name} to your cart`);
      });
    }
  }
}]);