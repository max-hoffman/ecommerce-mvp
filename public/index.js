angular.module('spooky-children', ['ngRoute'])

.config([ '$sceDelegateProvider', '$routeProvider', function($sceDelegateProvider, $routeProvider) {
  $sceDelegateProvider.resourceUrlWhitelist([
    'self',
    'https://api.moltin.com/v2/**',
    'https://api.stripe.com/**'
  ])
  //, 'app', 'navbar', 'product', 'productList'
  // $routeProvider
  //   .when('/', {
  //     template: '<app></app>'
  //   });
  // var homeState = {
  //   name: 'index',
  //   url: '/',
  //   templateUrl: './templates/app.html',
  //   controller: 'AppCtrl',
  //   bindToController: true
  //   // resolve: function(products, images) {

  //   // }
  // };

  // var checkoutState = {
  //   name: 'checkout',
  //   url: '/checkout',
  //   template: '<h1>Checkout</h1>'
  // };

  // $stateProvider.state(homeState);
  // $stateProvider.state(checkoutState);
}]);