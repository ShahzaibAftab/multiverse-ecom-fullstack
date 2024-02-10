const admin = require('../models/admin')
const cloudinaryImageDelete = require('../utils/cloudinaryImageDelete');
const { ObjectId } = require('mongoose').Types;
const adminController = {
    loginAdmin: async (req, res) => {
        try {

        } catch (error) {
            console.log('Error logging In account', error)
            res.status(500).json({ error: 'Internal server error' });
        }
    },
    addAdmin: async (req, res) => {
        try {
            const { emailAddress } = req.body;
            const searchEmail = await admin.findOne({ emailAddress })
            if (!searchEmail) {
                const newadmin = new admin(req.body);
                await newadmin.save()
                return res.json(newadmin)
            }
            else {
                return res.status(400).send({ message: 'Email already exist' })
            }
        } catch (error) {
            console.log('Error creating account', error)
            res.status(500).json({ error: 'Internal server error' });
        }
    },
    getAdmin: async (req, res) => {
        try {
            const row = await admin.find({})
            if (row.length === 0) {
                res.status(500).send('no record found')
                return;
            } res.status(200).json(row)
        } catch (error) {
            console.log('Error getting data from Server', error)
            res.status(500).json({ error: 'Internal server error' });
        }
    },
    updateAdmin: async (req, res) => {
        try {
            const _id = req.params.id;
            if (!ObjectId.isValid(_id)) {
                return res.status(400).json({ error: 'Invalid Admin id' });
            }
            // Check if files were uploaded
            if (req.body || (req.file && req.file.path)) {
                const updatedata = {
                    adminName: req.body.adminName,
                    password: req.body.password,
                    contact: req.body.contact,
                    emailAddress: req.body.emailAddress,
                };

                if (req.file && req.file.path) {
                    const adminData = await admin.findById(_id);
                    if (adminData.adminPhoto) {
                        // Delete the old admin photo from cloud storage
                        await cloudinaryImageDelete(adminData.adminPhoto);
                    }
                    updatedata.adminPhoto = req.file.path;
                }

                const updated = await admin.findByIdAndUpdate(_id, updatedata, { new: true });

                if (!updated) {
                    return res.status(404).json({ message: 'Unable to update - admin not found' });
                }

                return res.json({ message: 'Admin and its assets are updated', updated });
            } else {
                const updatedAdmin = await admin.findByIdAndUpdate(_id, req.body, { new: true });
                if (!updatedAdmin) {
                    return res.status(404).json({ message: 'Unable to update - admin not found' });
                }
                return res.json(updatedAdmin);
            }
        } catch (error) {
            console.error('Error updating admin:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
}
module.exports = adminController;