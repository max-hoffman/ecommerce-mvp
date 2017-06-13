angular.module('creepy-dolls')

.controller('ProductListCtrl', [function() {
  this.imageUrl = (doll) => {
    console.log('doll', doll.id);
    console.log('images',this.images[JSON.stringify(doll.id)]);

    this.images[doll.id]
  };
}])

.directive('productList', [function() {
  return {
    templateUrl: '../templates/productList.html',
    controller: 'ProductListCtrl as ctrl',
    bindToController: true,
    scope: {
      dolls: '<',
      images: '<',
      getUrl: '<'
    },
    restrict: 'E',
    link(s, e, a, c) {
      console.log('app controller', c);
    }
  };
}]);