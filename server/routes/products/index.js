var router = require('express').Router();
const products = require('./products');

router.get('/', products.findAllCtrl);

router.get('/:id', products.findOneCtrl);

module.exports = router;