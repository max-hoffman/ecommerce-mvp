const config = require('../../../../config/moltin-config');
const moltin = require('@moltin/sdk');

const Moltin = moltin.gateway({
  client_id: config.CLIENT_ID,
  client_secret: config.CLIENT_SECRET,
});

module.exports = {
  addToCartCtrl: function(req, res) {
    console.log('add to cart id', req.body.id);
    // console.log('molin add product fn', Moltin.Cart.AddProduct);
    Moltin.Cart.AddProduct("7fb75b17-7c96-483a-8538-653a889f897d", 1)
    .then(item => res.status(201).send(`Successfully added ${item}`))
    .catch(error => res.status(500).send('add to cart error' + JSON.stringify(error)));
  },
  fetchCartCtrl: function(req, res) {
    Moltin.Cart.Items()
    .then(cart => res.status(200).send(cart))
    .catch(error => res.status(500).send('fetch cart error' + error));
  }
}