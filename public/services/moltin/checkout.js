angular.module('spooky-children')

.service('checkout', [ '$http', function($http) {
  var order = {};
  return {
    get: () => cart,
    create: (shippingData) => {
      $http.post('/checkout', shippingData)
      .then(results => order = results.data)
      .catch(error => console.log('order fetch error', error));
    }
  }
}]);