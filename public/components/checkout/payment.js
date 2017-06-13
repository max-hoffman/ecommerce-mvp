angular.module('spooky-children')

.controller('PaymentCtrl', [ function() {
  this.payment = (info) => {
    //TODO: trigger payment here, still need to write module
  };
}])

.directive('payment', [ function() {
  return {
    templateUrl: '../../templates/checkout/payment.html',
    controller: 'PaymentCtrl as ctrl',
    bindToController: true,
    scope: {
      order: '<',
      data: '<'
    },
    restrict: 'E',
    link(s, e, a, c) {
      console.log('payment controller', c);
    }
  };
}]);