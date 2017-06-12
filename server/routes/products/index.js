var router = require('express').Router();
const products = require('./products');

router.get('/:id', products.findOneCtrl);

router.put('/:id', products.updateOneCtrl);

router.post('/', products.createOneCtrl);

router.get('/', products.findAllCtrl);

module.exports = router;