angular.module('spooky-children')


.controller('CheckoutCtrl', [ '$window', function($window) {
  this.onClick = () => {
    $window.location.href = '#!/payment';
  };

  this.proceedToPayment = () => {
    //TODO: any logic before putting in payment details?
  };

  this.createOrder(shippingInfo) = () => {
    //available as this.data
    //need to make incomplete order w/ checkout endpoint
  };
}])

.directive('checkout', [ function() {
  return {
    templateUrl: '../../templates/checkout/checkout.html',
    controller: 'CheckoutCtrl as ctrl',
    bindToController: true,
    scope: {
      cart: '<',
      options: '<',
      fields: '<'
    },
    restrict: 'E',
    link(s, e, a, c) {
      console.log('checkout controller', c);
    }
  };
}]);