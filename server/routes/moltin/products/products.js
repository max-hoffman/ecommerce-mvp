const config = require('../../../../config/moltin-config');
const moltin = require('@moltin/sdk');

const Moltin = moltin.gateway({
  client_id: config.CLIENT_ID,
  client_secret: config.CLIENT_SECRET,
});

module.exports = {
  findAllCtrl: function(req, res) {
    Moltin.Products.All()
    .then(products => {
      res.status(200).send(products.data);
    })
    .catch(error => {
      res.status(500).send('moltin request error:' + error);
    })
  },
  findOneCtrl: function(req, res) {
    Moltin.Products.Get(req.params.id)
    .then(product => {
      res.status(200).send(product);
    })
    .catch(error => {
      res.status(500).send('moltin request error:' + error);
    })
  },
  updateOneCtrl: function(req, res) {
    Moltin.Products.Update(req.body.id, req.body)
    .then(product => {
      res.status(201).send(product);
    })
    .catch(error => {
      res.status(500).send('moltin request error:' + error);
    });
  },
  createOneCtrl: function(req, res) {
    Moltin.Products.Create(req.body)
    .then(product => {
      res.status(201).send('created product', product);
    })
    .catch(error => {
      res.status(500).send('moltin request error:' + error);
    });
  }
};