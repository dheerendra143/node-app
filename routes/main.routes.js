const express = require('express');
const router = express.Router();

const orderRoute = require('../src/order/order.route')();
const userRoute = require('../src/user/user.route')();

/* GET home page. */
router.use('/orders', orderRoute);
router.use('/users', userRoute);

module.exports = router;
