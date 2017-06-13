angular.module('spooky-children')

.directive('navbar', [function() {
  return {
    templateUrl: '../templates/navbar.html',
    restrict: 'E'
  };
}]);