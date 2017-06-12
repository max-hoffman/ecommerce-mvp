var router = require('express').Router();
const images = require('./images');

router.get('/', images.findAllCtrl);

module.exports = router;