const express=require('express')
const orderController = require('../controllers/orderController')
const router = express.Router();

router.post('/api/add-order', orderController.createOrder);

module.exports = router;