const config = require('../../../../config/moltin-config');
const moltin = require('@moltin/sdk');

const Moltin = moltin.gateway({
  client_id: config.CLIENT_ID,
  client_secret: config.CLIENT_SECRET,
});

module.exports = {
  addToCartCtrl: function(req, res) {
    Moltin.Cart.AddProduct(re.body.id, 1)
    .then(item => res.status(201).send(`Successfully added ${item}`))
    .catch(error => res.status(500).send('add to cart error' + error));
  },
  fetchCartCtrl: function(req, res) {
    Moltin.Cart.Items()
    .then(cart => res.status(200).send(cart))
    .catch(error => res.status(500).send('fetch cart error' + error));
  },
  checkoutCtrl: function(req, res) {
    Moltin.Cart.Checkout(req.body)
    .then(order => res.status(201).send(order))
    .catch(error => res.status(500).send('fetch cart error' + error));
  }
}