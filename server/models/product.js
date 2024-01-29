const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    feedback: { type: String, required: true },
    rating: { type: Number, required: true }
});
const imgObject = new mongoose.Schema({
    img: { type: String, required: true }
})
const productSchema = new mongoose.Schema({
    productName: { type: String, required: true },
    productImg: [imgObject],
    price: { type: Number, required: true },
    rating: { type: Number, required: true },
    description: { type: String, required: true },
    comments: [commentSchema]
});

const product = mongoose.model('product', productSchema);

module.exports = product;
