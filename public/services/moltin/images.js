angular.module('creepy-dolls')

.services('images', [function() {
  var images = {};
  return {
    get: () => images,
    fetch: () => {
      $http.get('/images')
      .then(results => images = results)
      .catch(error => console.log('product fetch error', error));
    }
  }
}]);