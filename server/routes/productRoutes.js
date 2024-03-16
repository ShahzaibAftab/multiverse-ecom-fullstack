const express = require('express')
const productController = require('../controllers/productController')
const verifyToken = require('../middlewares/jwt')
const upload = require('../utils/cloudinary')
const router = express.Router();

// SEARCH PRODUCT BY NAME
router.get('/product/search-product-by-name/:name', productController.searchProduct)

router.post('/product/add-product', verifyToken, upload.array('productImg'), productController.addProduct)
router.get('/product/display-all-products', productController.getProduct)
router.put('/product/update-product/:id', upload.array('productImg'), verifyToken, productController.updateProduct)
router.delete('/product/delete-product/:id', verifyToken, productController.deleteProduct)

module.exports = router;