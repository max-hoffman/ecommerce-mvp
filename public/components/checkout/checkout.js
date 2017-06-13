angular.module('spooky-children')

.directive('checkout', [ function() {
  return {
    templateUrl: '../../templates/checkout/checkout.html',
    controller: 'CheckoutCtrl as ctrl',
    bindToController: true,
    scope: {
    },
    restrict: 'E',
    link(s, e, a, c) {
      console.log('checkout controller', c);
    }
  };
}]);