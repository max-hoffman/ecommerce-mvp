angular.module('creepy-dolls')

.directive('navbar', [function() {
  return {
    templateUrl: '../templates/navbar.html',
    restrict: 'E'
  };
}]);