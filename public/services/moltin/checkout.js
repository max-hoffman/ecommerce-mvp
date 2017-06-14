angular.module('spooky-children')

.service('checkout', [ '$http', function($http) {
  var order = {};
  var options= {};
  var fields = {};
  var data = {
    bill: {},
    ship: {},
    ship_bill: 0,
    notes: '',
    shipping: '',
    gateway: ''
  };

  return {
    get: () => cart,
    create: (shippingData) => {
      return moltin.Cart.Complete()
      .then(results => order = results.data)
      .then(moltin.Cart.Checkout)
      .then(optionsData => options = optionsData)
      .then(() => {
        returnmoltin.Address.Fields()
      })
      .catch(error => console.log('cart fetch error', error));
    },
    options: () => options,
    fields: () => fields,
    order: () => order,
    data: () => {
      return 
    }
  }
}]);
