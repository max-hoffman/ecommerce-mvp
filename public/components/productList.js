angular.module('creepy-dolls')

.controller('ProductListCtrl', [function() {

}])

.directive('productList', [function() {
  return {
    templateUrl: '../templates/productList.html',
    controller: 'ProductListCtrl as ctrl',
    bindToController: true,
    scope: {},
    restrict: 'E'
  };
}]);