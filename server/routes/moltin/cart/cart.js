const config = require('../../../../config/moltin-config');
const moltin = require('@moltin/sdk');

const Moltin = moltin.gateway({
  client_id: config.CLIENT_ID,
  client_secret: config.CLIENT_SECRET,
});

module.exports = {
  addToCartCtrl: function(req, res) {
    console.log(req.body.id);
    Moltin.Cart.AddProduct(req.body.id)
    .then(item => res.status(201).send(`Successfully added ${item}`))
    .catch(error => res.status(500).send('add to cart error' + JSON.stringify(error)));
  },
  fetchCartCtrl: function(req, res) {
    Moltin.Cart.Items()
    .then(cart => res.status(200).send(cart))
    .catch(error => res.status(500).send('fetch cart error' + error));
  }
}