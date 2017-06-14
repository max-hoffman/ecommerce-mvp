angular.module('spooky-children')

.service('moltin', [ 'config', function(config) {

	// moltin = new Moltin({
	// 	client_id: config.CLIENT_ID,
	// 	notice: (type, msg, code) => {
  //     moltin.Authenticate();
  //   }
  // });
  var moltin = new Moltin({
    publicId: 'config.CLIENT_ID',
    notice: function(type, msg) {
      console.log('made moltin obj');
    } 
  });
  moltin.Authenticate(function() {
    console.log('connected to moltin');
  });

	return moltin;
}]);
