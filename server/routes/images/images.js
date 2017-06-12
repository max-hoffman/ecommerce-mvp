const config = require('../../../config/moltin-config');
const moltin = require('@moltin/sdk');
const axios = require('axios');

const Moltin = moltin.gateway({
  client_id: config.CLIENT_ID,
  client_secret: config.CLIENT_SECRET,
});

module.exports = {
  findAllCtrl: function(req, res) {
    Moltin.Files.All()
    .then(files => {
      res.status(200).send(files.data);
    })
    .catch(error => {
      ses.status(500).send('moltin request error' + error);
    })
  }
};