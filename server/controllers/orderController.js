const order = require('../models/order')
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
    }
}
module.exports = orderController;