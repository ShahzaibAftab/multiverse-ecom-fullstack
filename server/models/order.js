

const mongoose = require('mongoose');

const productObject = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: String, required: true },
    quantity: { type: Number, required: true }
});

const orderSchema = new mongoose.Schema({
    customerName: { type: String, required: true },
    contact: { type: Number, required: true },
    emailAddress: { type: String, required: true },
    postalCode: { type: Number },
    city: { type: String, required: true },
    province: { type: String, required: true },
    address: { type: String, required: true },
    paymentMode: { type: String, required: true },
    total: { type: Number, required: true },
    products: [productObject]  // Corrected field name to "products"
});

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;

