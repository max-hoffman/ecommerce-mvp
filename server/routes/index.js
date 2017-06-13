var router = require('express').Router();
const productsRouter = require('./moltin/products');
const imageRouter = require('./moltin/images');
const cartRouter = require('./moltin/cart');
const stripeRouter = require('./stripe');
const checkoutRouter = require('./moltin/checkout');

router.use('/products', productsRouter);
router.use('/stripe', stripeRouter);
router.use('/images', imageRouter);
router.use('/cart', cartRouter);
router.use('/checkout', checkoutRouter);

module.exports = router;