const config = require('../../../config/moltin-config');
const moltin = require('@moltin/sdk');
const axios = require('axios');

const Moltin = moltin.gateway({
  client_id: config.CLIENT_ID,
  client_secret: config.CLIENT_SECRET,
});

module.exports = {
  findAllCtrl: function(req, res) {
    var images = {}; 
    Moltin.Files.All()
    .then(files => {
      return files.data.reduce((accum, file) => {
        accum[file.id] = file.link.href;
        return accum;
      }, {});
    })
    .then(data => {
      images = data;
      return new Promise((resolve, reject) => {
        Moltin.Products.All()
        .then(dolls => resolve(dolls));
      });
    })
    .then(({ data }) => {
      var map = data.reduce((accum, doll) => {
        accum[doll.id] = images[doll.relationships.files.data[0].id];
        return accum;
      }, {});
      res.status(200).send(map);
    })
    .catch(error => {
      res.status(500).send('moltin request error' + error);
    })
  }
};