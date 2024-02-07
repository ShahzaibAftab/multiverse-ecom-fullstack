const express = require('express')
const adminController = require('../controllers/adminController')
const bcrypt = require('../middlewares/bcrypt');
const upload = require('../utils/cloudinary');
const router = express.Router();

router.post('/admin/create-admin-account', bcrypt, adminController.addAdmin);
router.get('/admin/get-all-admin', adminController.getAdmin);
router.put('/admin-update-admin-info/:id', upload.single('adminPhoto'), adminController.updateAdmin)

module.exports = router;