angular.module('spooky-children')

.directive('error', [ function() {
  return {
    templateUrl: '../templates/error.html',
    controller: 'ErrorCtrl as ctrl',
    bindToController: true,
    scope: {
    },
    restrict: 'E',
    link(s, e, a, c) {
      console.log('app controller', c);
    }
  };
}]);