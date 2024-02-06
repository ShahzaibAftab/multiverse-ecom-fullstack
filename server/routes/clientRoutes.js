const express = require('express')
const clientController = require('../controllers/clientController')
const bcrypt = require('../middlewares/bcrypt');
const upload = require('../utils/cloudinary');
const router = express.Router();

router.post('/client/create-account', bcrypt, clientController.createAccount)
router.get('/client/all-client-account', clientController.getAllAccount)
router.put('/client/update-client-account/:id', upload.single('clientPhoto'), clientController.updateAccount)
router.delete('/client/delete-client-account/:id', clientController.deleteAccount)
module.exports = router;     