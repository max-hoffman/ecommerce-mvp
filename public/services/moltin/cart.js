angular.module('spooky-children')

.service('cart', [ '$http', 'moltin', function($http, moltin) {
  var cart = {};
  return {
    get: () => cart,
    fetch: () => {
      // return $http.get('/cart')
      // .then(results => cart = results.data)
      // .catch(error => console.log('cart fetch error', error));
      moltin.Cart.Contents()
      .then(results => cart = results.data)
      .catch(error => console.log('cart fetch error', error));
    },
    add: (doll) => {
      // $http.post('/cart', doll)
      // .then(item => {
      //   console.log('added', item);
      //   fetch();
      // })
      // .catch(error => console.log('cart add error', error));
      moltin.Cart.Insert(doll.id, 1)
      .then(item => {
        console.log('added', item);
        fetch();
      })
      .catch(error => console.log('cart add error', error));
    }
  }
}]);