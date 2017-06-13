var router = require('express').Router();
const checkout = require('./checkout');

router.post('/', checkout.checkoutCtrl);

router.put('/enable/:slug', checkout.enableCtrl);

module.exports = router;