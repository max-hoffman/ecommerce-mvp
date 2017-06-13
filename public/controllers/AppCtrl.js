angular.module('creepy-dolls')

.controller('AppCtrl', [ 'products', 'images', function(products, images) {
  this.getDolls = products.get;
  this.getImages = images.get;
  this.getUrl = images.map;
  
  // var dolls = products.get();
  // var images = images.get();
  // var imageMapping = dolls.reduce((accum, doll) => {
  //   accum[doll.id] = images[doll.relationships.files.data[0].id];
  //   return accum;
  // }, {})

  (function init() {
    products.fetch()
    .then(dolls => {
      images.fetch(dolls);
    })
  })();
}]);