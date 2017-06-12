var router = require('express').Router();
const products = require('./products');

router.get('/', products.findAllCtrl);

router.get('/:id', products.findOneCtrl);

router.put('/:id', products.updateOneCtrl);

router.post('/', products.createOneCtrl);

module.exports = router;