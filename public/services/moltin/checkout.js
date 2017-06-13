
  // orderCtrl: function(req, res) {
  //   Moltin.Cart.Checkout(req.body)
  //   .then(order => res.status(201).send(order))
  //   .catch(error => res.status(500).send('fetch cart error' + error));
  // },

  var moltin = new Moltin({publicId: 'YOUR_PUBLIC_API_KEY', notice: function(type, msg) { $('<div class="'+type+'">'+msg+'</div>').prependTo($('body')); } });
      moltin.Authenticate(function() {
        $('<div class="success">Authentication successful</div>').prependTo($('body'));
        $('.ready').show();
        // API calls here...
      });