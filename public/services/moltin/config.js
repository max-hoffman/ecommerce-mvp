angular.module('spooky-children')

.service('config', [ '$http', function($http) {
  var public = { CLIENT_ID: "Tw0EDzKI58vnkqIzLkYumnFG8SfxtFGI98lYP5jkHo" };
  return {
    CLIENT_ID: public.CLIENT_ID
  }
}]);