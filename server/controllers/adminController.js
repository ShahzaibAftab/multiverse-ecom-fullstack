const admin = require('../models/admin')
const cloudinaryImageDelete = require('../utils/cloudinaryImageDelete');
const { ObjectId } = require('mongoose').Types;
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const getUserIdFromToken = require('../utils/getUserIdFromToken');
const adminController = {
    loginAdmin: async (req, res) => {
        try {
            const { emailAddress, password } = req.body;
            const Admin = await admin.findOne({ emailAddress });
            if (!Admin) {
                return res.status(404).json({ message: 'Invalid email' });
            }

            // Use bcrypt.compare to compare the passwords
            bcrypt.compare(password, Admin.password, async (err, result) => {
                if (!result) {
                    return res.status(401).send({ message: 'Wrong password' });
                }

                // Password is correct, generate token here
                try {                   
                    const token = await Admin.generateAuthToken();
                    console.log(token); 

                    // Set the token in a cookie
                    res.cookie('auth', token, {
                        expiresIn: new Date(Date.now() + 24 * 60 * 60 * 1000),
                        httpOnly: true,
                        secure: true
                    });

                    // Send the token back to the client
                    res.json({ message: 'Logged in successfully!', token: token });
                } catch (error) {
                    console.log('Error generating token:', error);
                    res.status(500).json({ error: 'Internal server error' });
                }
            });
        } catch (error) {
            console.log('Error logging in account', error);
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
    getMyAdmin: async (req, res) => {
        const cookieString = req.headers.auth;
        console.log('cookie', req.headers.auth)

        const cookies = cookieString.split("; ");
        let myCookieValue;
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i]

            if (cookie.startsWith("auth=")) {
                myCookieValue = cookie.split("=")[1];
                break;
            }
        }
        const adminId = await getUserIdFromToken(myCookieValue, process.env.JWT_SCERETKEY);
        if (!ObjectId.isValid(adminId)) {
            return res.status(400).json({ error: 'Invalid Admin id' });
        }

        try {

            const adminData = await admin.findById(_id = adminId);

            if (!adminData) {
                return res.status(404).json({ message: 'No record found' });
            }

            return res.json({
                _id: adminData._id,
                adminName: adminData.adminName,
                password: adminData.password,
                adminPhoto: adminData.adminPhoto,
                contact: adminData.contact,
                emailAddress: adminData.emailAddress
            });
        } catch (error) {
            console.error('Error:', error.message);
            return res.status(500).json({ message: 'Internal Server Error' });
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