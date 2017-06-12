const config = require('../../../config/moltin-config');
const moltin = require('@moltin/sdk');

const Moltin = moltin.gateway({
  client_id: config.CLIENT_ID,
  client_secret: config.CLIENT_SECRET,
});

module.exports = {
  findAllCtrl: function(req, res) {
    console.log('get all products');
    Moltin.Products.All()
    .then(products => {
      res.status(200).send(products.data);
    })
    .catch(error => console.log('moltin fetch error', error));
  },
  findOneCtrl: function(req, res) {
    console.log('get all products');
    Moltin.Products.Get(req.params.id)
    .then(product => {
      res.status(200).send(product);
    })
    .catch(error => console.log('moltin fetch error', error));
  },
  updateOneCtrl: function(req, res) {
    console.log('update endpoint', req.params)
    Moltin.Products.Update(req.body.id, req.body)
    .then(product => {
      res.status(201).send(product);
    })
    .catch(error => {
      console.log('moltin update error', error);
    });
  },
  createOneCtrl: function(req, res) {
    Moltin.Products.Create(req.body)
    .then(product => {
      res.status(201).send('created product', product);
    })
    .catch(error => {
      console.log('moltin update error', error);
    });
  }
};