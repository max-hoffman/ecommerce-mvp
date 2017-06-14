
  // orderCtrl: function(req, res) {
  //   Moltin.Cart.Checkout(req.body)
  //   .then(order => res.status(201).send(order))
  //   .catch(error => res.status(500).send('fetch cart error' + error));
  // },

  // var moltin = new Moltin({publicId: 'YOUR_PUBLIC_API_KEY', notice: function(type, msg) { $('<div class="'+type+'">'+msg+'</div>').prependTo($('body')); } });
  //     moltin.Authenticate(function() {
  //       $('<div class="success">Authentication successful</div>').prependTo($('body'));
  //       $('.ready').show();
  //       // API calls here...
  //     });

      //TODO: Authenticate to connect to moltin in front end with public key
      //TODO: create method that takes payment details, and posts to moltin's api (not mine)
      //TODO: find right api method
      //TODO: do the post, return the response in callback (can't do bluebird on front-end)