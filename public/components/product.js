angular.module('creepy-dolls')

.controller('ProductCtrl', [function() {

}])

.directive('product', [function() {
  return {
    templateUrl: '../templates/product.html',
    controller: 'ProductCtrl as ctrl',
    bindToController: true,
    scope: {},
    restrict: 'E'
  };
}]);