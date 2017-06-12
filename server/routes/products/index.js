var router = require('express').Router();
const products = require('./products');
const images = require('./images');

router.get('/files', images.findAllCtrl);

router.get('/:id', products.findOneCtrl);

router.put('/:id', products.updateOneCtrl);

router.post('/', products.createOneCtrl);

router.get('/', products.findAllCtrl);

module.exports = router;