const client = require('../models/client')
const cloudinaryImageDelete = require('../utils/cloudinaryImageDelete');
const { ObjectId } = require('mongoose').Types;

const clientController = {
  createAccount: async (req, res) => {
    try {
      const { emailAddress } = req.body;
      const searchEmail = await client.findOne({ emailAddress })
      if (!searchEmail) {
        const newClient = new client(req.body);
        await newClient.save()
        return res.json(newClient)
      }
      else {
        return res.status(400).send({ message: 'Email already exist' })
      }
    } catch (error) {
      console.log('Error creating account', error)
      res.status(500).json({ error: 'Internal server error' });

    }
  },
  getAllAccount: async (req, res) => {
    try {
      const row = await client.find({})
      if (row.length === 0) {
        res.status(500).send('no record found')
        return;
      } res.status(200).json(row)
    } catch (error) {
      console.log('Error getting data from Server', error)
      res.status(500).json({ error: 'Internal server error' });

    }
  },
  updateAccount: async (req, res) => {
    try {
      const _id = req.params.id;
      if (!ObjectId.isValid(_id)) {
        console.log('update id is not valid');
        return res.status(500).send('Internal server error');
      }

      // Use req.file to check if a file was uploaded
      if (req.body || (req.file && req.file.path)) {
        const updatedata = {
          customerName: req.body.customerName,
          clientPhoto: req.file ? req.file.path : undefined,
          password: req.body.password,
          contact: req.body.contact,
          emailAddress: req.body.emailAddress,
          postalCode: req.body.postalCode,
          city: req.body.city,
          province: req.body.province,
          address: req.body.address,
          orders: req.body.orders,
        };

        const update = await client.findByIdAndUpdate(_id, updatedata, { new: true });

        if (!update) {
          console.log(update);
          return res.status(404).json({ message: 'Unable to update - Client not found' });
        }

        return res.json(update);
      }
    } catch (error) {
      console.error('Error during update:', error);

      if (error.name === 'ValidationError') {
        return res.status(400).json({ message: error.message });
      }
      // Use next to pass the error to the error-handling middleware
      next(error);
    }
  },
  deleteAccount: async (req, res) => {
    try {
      // FIRST VALIDATE ObjectId, STORE DATA AGAINST, DELETE DATA AGAINST ID AND DELETE CLOUDINARY IMAGE
      const _id = req.params.id;
      if (!ObjectId.isValid(_id)) {
        return res.status(400).json({ error: 'Invalid Order Id' });
      }
      const clientData = await client.findOne({ _id })
      const clientPhoto = clientData.clientPhoto;

      const deleteEntry = await client.findByIdAndDelete(_id);

      if (!deleteEntry) {
        return res.status(404).send('Unable to delete - entry not found');
      }

      // You may want to send a response here if the client entry is deleted successfully
      res.status(200).send(`Deleted successfully: ${deleteEntry}`);

      // Cloudinary image deletion
      const result = await cloudinaryImageDelete(clientPhoto);

      if (result && result.result === 'ok') {
        // If the image deletion is successful, log or send a response
        console.log('Image deleted successfully');
      } else {
        // If the image deletion fails, log or send a response
        console.error('Error during image deletion:', result);
      }
    } catch (error) {
      console.error('Error during deletion process:', error);

      if (error.name === 'ValidationError') {
        return res.status(400).json({ message: error.message });
      }
      // Use next to pass the error to the error-handling middleware
    }
  }
}
module.exports = clientController