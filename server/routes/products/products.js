const config = require('../../../config/moltin-config');
const moltin = require('@moltin/sdk');
console.log(config);
const Moltin = moltin.gateway({
  client_id: config.CLIENT_ID,
  client_secret: config.CLIENT_SECRET,
});

module.exports = {
  findAllCtrl: function(req, res) {
    console.log('get all products');
    Moltin.Products.All().then((products) => {
      res.send(products);
    })
    .catch(error => console.log('moltin fetch error', error));
  },
  findOneCtrl: function(req, res) {
    console.log('get all products');
    Moltin.Products.Get(req.params.id).then((product) => {
      res.send(product);
    })
    .catch(error => console.log('moltin fetch error', error));
  }
};