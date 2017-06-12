amgular.module('creepy-dolls', [])

.config([ '$sceDelegateProvider', function($sceDelegateProvider) {
  $sceDelegateProvider.resourceWhiteList([
    'self',
    'https://api.moltin.com/v2/**',
    'https://api.stripe.com/**'
  ])
}]);