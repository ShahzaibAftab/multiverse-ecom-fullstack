const express = require('express')
const clientController = require('../controllers/clientController')
const verifyToken = require('../middlewares/jwt')
const bcrypt = require('../middlewares/bcrypt');
const upload = require('../utils/cloudinary');
const router = express.Router();

// SEARCH CLIENT NAME AND EMAIL
router.get('/client/search-client-account-by-name/:name', clientController.searchClient)

router.post('/client/login', clientController.loginAccount)
router.put('/client/update-order/:id', verifyToken, clientController.updateOrders)

router.post('/client/create-account', bcrypt, clientController.createAccount)
router.get('/client/all-client-account', verifyToken, clientController.getAllAccount)
router.put('/client/update-client-account/:id', verifyToken, upload.single('clientPhoto'), clientController.updateAccount)
router.delete('/client/delete-client-account/:id', verifyToken, clientController.deleteAccount)
module.exports = router;     