angular.module('spooky-children')

.service('cart', [ '$http', function($http) {
  var cart = {};
  return {
    get: () => cart,
    fetch: () => {
      return $http.get('/cart')
      .then(results => cart = results.data)
      .catch(error => console.log('cart fetch error', error));
    },
    add: (doll) => {
      $http.post('/cart', doll)
      .then(item => {
        console.log('added', item);
        fetch();
      })
      .catch(error => console.log('cart add error', error));
    }
  }
}]);