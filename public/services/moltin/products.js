var Promise = require('bluebird');

angular.module('creepy-dolls')

.service('products', [ '$http', function($http) {
  var dolls = [];
  return {
    get: () => dolls,
    fetch: () => {
      return $http.get('/products')
      .then(results => {
        return new Promise((resolve, reject) => {
          dolls = results.data
          resolve(dolls);
        });
      })
      .catch(error => console.log('product fetch error', error));
    }
  }
}]);