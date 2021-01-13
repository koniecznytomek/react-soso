const express = require('express');
const router = express.Router();
const OrderController = require('../controllers/order.controller');

router.get('/orders', OrderController.getOrders);
router.post('/orders', OrderController.sendOrder);

module.exports = router;
