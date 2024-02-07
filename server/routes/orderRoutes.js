const express = require('express')
const orderController = require('../controllers/orderController')
const router = express.Router();

// SEARCH ORDER ID
router.get('/order/search-order-number/:id', orderController.searchOrder);

router.post('/order/add-order', orderController.createOrder);
router.get('/order/display-all-order', orderController.getAllOrder);
router.put('/order/update-order-detail/:id', orderController.updateOrder);
router.delete('/order/delete-order-record/:id', orderController.deleteOrder);

module.exports = router;