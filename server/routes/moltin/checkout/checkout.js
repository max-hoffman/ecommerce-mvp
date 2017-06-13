const config = require('../../../../config/moltin-config');
const moltin = require('@moltin/sdk');

const Moltin = moltin.gateway({
  client_id: config.CLIENT_ID,
  client_secret: config.CLIENT_SECRET,
});


module.exports = {
  checkoutCtrl: function(req, res) {
    Moltin.Cart.Checkout(req.body)
    .then(order => res.status(201).send(order))
    .catch(error => res.status(500).send('fetch cart error' + error));
  },
  enableCtrl: function(req, res) {
    Moltin.Gateways.Enabled(req.params.slug, true)
    .then(moltinRes => res.status(201).send(moltinRes))
    .catch(error => res.status(500).send('fetch cart error' + error));
  }
}