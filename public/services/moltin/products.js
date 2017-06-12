angular.module('creepy-dolls')

.services('products', [ '$http', function($http) {
  var dolls = [];
  return {
    get: () => dolls,
    fetch: () => {
      $http.get('/products')
      .then(results => dolls = results)
      .catch(error => console.log('product fetch error', error));
    }
  }
}]);