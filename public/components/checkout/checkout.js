angular.module('spooky-children')

.directive('checkout', [ function() {
  return {
    templateUrl: '../../templates/checkout/checkout.html',
    controller: function($window) {
      this.onClick = () => {
        $window.location.href = '#!/payment';
      };
    },
    controllerAs: 'ctrl',
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