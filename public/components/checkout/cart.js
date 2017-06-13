angular.module('spooky-children')

.directive('cart', [ function() {
  return {
    templateUrl: '../../templates/checkout/cart.html',
    controller: 'CartCtrl as ctrl',
    bindToController: true,
    scope: {
      cart: '<'
    },
    restrict: 'E',
    link(s, e, a, c) {
      console.log('cart controller', c);
    }
  };
}]);