const express = require('express')
const productController = require('../controllers/productController')
const upload = require('../utils/cloudinary')
const bcrypt = require('../middlewares/bcrypt')
const router = express.Router();

router.post('/product/add-product', upload.array('productImg'), productController.addProduct)
router.get('/product/display-all-products', productController.getProduct)
router.put('/product/update-product/:id', upload.array('productImg'), productController.updateProduct)
router.delete('/product/delete-product/:id', productController.deleteProduct)

module.exports = router;
