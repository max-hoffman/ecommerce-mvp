var router = require('express').Router();
const cart = require('./cart');

router.post('/', cart.addToCartCtrl);

router.get('/', cart.fetchCartCtrl);

router.post('/checkout', cart.checkoutCtrl);

module.exports = router;