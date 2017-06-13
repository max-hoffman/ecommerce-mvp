angular.module('spooky-children')

.service('products', [ '$http', function($http) {
  var dolls = [];
  return {
    get: () => dolls,
    fetch: () => {
      return $http.get('/products')
      .then(results => dolls = results.data)
      .catch(error => console.log('product fetch error', error));
    }
  }
}]);