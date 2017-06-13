angular.module('spooky-children')

.directive('app', [ function() {
  return {
    templateUrl: '../templates/app.html',
    controller: 'AppCtrl as ctrl',
    bindToController: true,
    scope: {
    },
    restrict: 'E',
    // transclude: true,
    link(s, e, a, c) {
      console.log('app controller', c);
    }
  };
}]);