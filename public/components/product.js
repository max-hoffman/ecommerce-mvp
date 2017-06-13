angular.module('spooky-children')

.controller('ProductCtrl', [function() {

}])

.directive('product', [function() {
  return {
    templateUrl: '../templates/product.html',
    controller: 'ProductCtrl as ctrl',
    bindToController: true,
    scope: {
      doll: '<',
      imageUrl: '<',
      onClick:'<'
    },
    restrict: 'E',
    link(s, e, a, c) {
      
    }
  };
}]);