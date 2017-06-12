angular.module('creepy-dolls')

.controller('NavbarCtrl', [function() {

}])

.directive('navbar', [function() {
  return {
    templateUrl: '../templates/navbar.html',
    controller: 'NavbarCtrl as ctrl',
    bindToController: true,
    scope: {},
    restrict: 'E'
  };
}]);