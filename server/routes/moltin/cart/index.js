var router = require('express').Router();
const cart = require('./cart');

router.post('/add', cart.addToCartCtrl);

router.get('/fetch', cart.fetchCartCtrl);

router.post('/checkout', cart.checkoutCtrl);

module.exports = router;