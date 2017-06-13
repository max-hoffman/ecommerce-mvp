angular.module('spooky-children')

.service('images', [ '$http', function($http) {
  var images = {};

  return {
    get: () => images,
    fetch: (dolls) => {
      $http.get('/images')
      .then(results => images = results.data)
      .catch(error => console.log('product fetch error', error));
    }
  }
}]);