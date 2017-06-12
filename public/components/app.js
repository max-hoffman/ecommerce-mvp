angular.module('creepy-dolls')

.controller('AppCtrl', [function() {

}])

.directive('app', [function() {
  return {
    templateUrl: '../templates/app.html',
    controller: 'AppCtrl as ctrl',
    bindToController: true,
    scope: {},
    restrict: 'E'
  };
}]);