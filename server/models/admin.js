const mongoose = require('mongoose')
const adminSchema = new mongoose.Schema({
    adminName: { type: String, required: true },
    adminPhoto: { type: String },
    password: { type: String, required: true },
    contact: { type: Number, required: true },
    emailAddress: { type: String, required: true },
})
const admin = mongoose.model('admin', adminSchema);
module.exports = admin