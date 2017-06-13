angular.module('creepy-dolls')

.service('images', [ '$http', 'products', function($http, products) {
  var images = {};
  var mapping = {};

  return {
    get: () => images,
    map: (doll) => {
      console.log(doll.id);
      console.log(mapping);
      return mapping[doll.id];
    },
    fetch: (dolls) => {
      $http.get('/images')
      .then(results => images = results.data)
      .then(() => {
        mapping = dolls.reduce((accum, doll) => {
          console.log('images', images);
          console.log('accum', accum);
          console.log('doll', doll);
          console.log('id', doll.relationships.files.data[0].id);
          accum[doll.id] = images[doll.relationships.files.data[0].id];
          return accum;
        }, {})
      })
      .catch(error => console.log('product fetch error', error));
    }
  }
}]);