angular.module('spooky-children')

.controller('ProductListCtrl', [function() {

}])

.directive('productList', [function() {
  return {
    templateUrl: '../templates/productList.html',
    controller: 'ProductListCtrl as ctrl',
    bindToController: true,
    scope: {
      dolls: '<',
      images: '<',
      addToCart: '<'
    },
    restrict: 'E',
    link(s, e, a, c) {
      console.log('app controller', c);
    }
  };
}]);