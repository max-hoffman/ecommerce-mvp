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
      var images = files.data.reduce((accum, file) => {
        accum[file.id] = file.link.href;
        return accum;
      }, {});
      res.status(200).send(images);
    })
    .catch(error => {
      res.status(500).send('moltin request error' + error);
    })
  }
};