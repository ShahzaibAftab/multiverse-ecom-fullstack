const order = require('../models/order')
const { ObjectId } = require('mongoose').Types;
const orderController = {
    createOrder: async (req, res) => {
        try {
            const newOrder = new order(req.body);
            await newOrder.save()
            return res.json(newOrder)
        } catch (error) {
            console.log('Error creating order', error)
            res.status(500).json({ error: 'Internal server error' });
        }
    },
    getAllOrder: async (req, res) => {
        try {
            const row = await order.find({})
            if (row.length === 0) {
                res.status(500).send('No record found')
                return;
            }
            res.status(200).json(row)
        }
        catch (error) {
            console.log('error getting order record', error)
            res.status(500).json({ error: 'Internal server error' });
        }
    },
    deleteOrder: async (req, res) => {
        try {
            const deleteId = req.params.id

            if (!ObjectId.isValid(deleteId)) {
                return res.status(400).json({ error: 'Invalid Order Id' });
            }
            const deleteEntry = await order.findByIdAndDelete(deleteId)
            if (!deleteEntry) {
                res.status(404).send('unable to Delete')
            }
            res.status(200).send(`deleted successfully ${deleteEntry}`)
        } catch (error) {
            console.log('Error deleting order Id', error)
            res.status(500).json({ error: 'Internal server error' });
        }
    },
    searchOrder: async (req, res) => {
        try {
            let result = await order.find({
                _id: req.params.id
            });
            if (result)
                res.send(result);
            res.send({ message: 'no record found against order Id' })
        } catch (error) {
            console.log('Unable to search order', error)
            res.status(500).json({ error: 'Internal server error' });
        }
    },
    updateOrder: async (req, res) => {
        try {
            const _id = req.params.id
            if (!ObjectId.isValid(_id)) {
                console.log('update id is not valid')
                return res.status(500).send('Internal server error')
            }
            if (req.body) {
                const updateData = {
                    customerName: req.body.customerName,
                    contact: req.body.contact,
                    emailAddress: req.body.emailAddress,
                    postalCode: req.body.postalCode,
                    city: req.body.city,
                    province: req.body.province,
                    address: req.body.address,
                    paymentMode: req.body.paymentMode,
                    total: req.body.total,
                    products: req.body.products
                }
                try {
                    const update = await order.findByIdAndUpdate(_id, updateData, { new: true });
                    if (!update) {
                        return res.status(404).json({ message: 'Unable to update - Order not found' });
                    }
                    return res.json(update);
                } catch (error) {
                    console.error('Error during update:', error);
                    if (error.name === 'ValidationError') {
                        return res.status(400).json({ message: error.message });
                    }
                    return res.status(500).json({ message: 'Internal server error' });
                }
            }

        }
        catch (error) {
            console.log('unable to update check data object', error)
        }

    }
}
module.exports = orderController;