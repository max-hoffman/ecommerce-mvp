const config = require('../../../config/moltin-config');
const moltin = require('@moltin/sdk');
const axios = require('axios');

const Moltin = moltin.gateway({
  client_id: config.CLIENT_ID,
  client_secret: config.CLIENT_SECRET,
});

module.exports = {
  findAllCtrl: function(req, res) {
    console.log('get images');
    Moltin.Files.All()
    .then(files => {
      console.log('files', files);
      res.status(200).send(files.data);
    })
    .catch(error => console.log('moltin fetch error', error));
  }
};