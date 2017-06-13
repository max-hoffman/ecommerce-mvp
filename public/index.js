angular.module('spooky-children', [])

.config([ '$sceDelegateProvider', function($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist([
    'self',
    'https://api.moltin.com/v2/**',
    'https://api.stripe.com/**'
  ])
}]);