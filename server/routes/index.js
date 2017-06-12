var router = require('express').Router();
const productsRouter = require('./products');
const stripeRouter = require('./stripe');

router.use('/products', productsRouter);
router.use('/stripe', stripeRouter);

module.exports = router;