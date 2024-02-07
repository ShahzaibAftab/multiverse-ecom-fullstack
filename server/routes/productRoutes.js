const express = require('express')
const productController = require('../controllers/productController')
const upload = require('../utils/cloudinary')
const router = express.Router();

// SEARCH PRODUCT BY NAME
router.get('/product/search-product-by-name/:name', productController.searchProduct)

router.post('/product/add-product', upload.array('productImg'), productController.addProduct)
router.get('/product/display-all-products', productController.getProduct)
router.put('/product/update-product/:id', upload.array('productImg'), productController.updateProduct)
router.delete('/product/delete-product/:id', productController.deleteProduct)

module.exports = router;
