const mongoose = require('mongoose');
const orderDetails = new mongoose.Schema({
    id: { type: String }
})
const clientSchema = new mongoose.Schema({
    customerName: { type: String, required: true },
    clientPhoto: { type: String },
    password: { type: String, required: true },
    contact: { type: Number, required: true },
    emailAddress: { type: String, required: true },
    postalCode: { type: Number },
    city: { type: String, required: true },
    province: { type: String, required: true },
    address: { type: String, required: true },

    orders: [orderDetails]
})
const client = mongoose.model('client', clientSchema);
module.exports = client