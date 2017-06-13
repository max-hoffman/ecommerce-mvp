var router = require('express').Router();
const cart = require('./cart');

router.post('/', cart.addToCartCtrl);

router.get('/', cart.fetchCartCtrl);

module.exports = router;