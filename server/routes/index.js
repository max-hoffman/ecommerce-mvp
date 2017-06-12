var router = require('express').Router();
const productsRouter = require('./products');
const stripeRouter = require('./stripe');
const imageRouter = require('./images');

router.use('/products', productsRouter);
router.use('/stripe', stripeRouter);
router.use('/images', imageRouter);
module.exports = router;