const product = require('../models/product');
const cloudinaryImageDelete = require('../utils/cloudinaryImageDelete');
const { ObjectId } = require('mongoose').Types
const productController = {
    addProduct: async (req, res) => {
        try {
            const { productName, price, rating, description } = req.body;

            // Extract URLs of uploaded images from req.files
            // console.log('productimgs', req.body.productImg,'array',req.body.productImg[0]);
            const productImgUrls = req.files.map(file => file.path);
            console.log('body', req.body)
            console.log('body files', req.files)
            console.log('productImgUrls', productImgUrls)
            // Map each image URL to an object with an 'img' property
            const productImgObjects = productImgUrls.map(url => ({ img: url }));

            const newProduct = new product({
                productName,
                productImg: productImgObjects, // Now each URL to a separate 'img' property
                price,
                rating,
                description
            });

            await newProduct.save();

            // Respond with the newly created product
            res.status(201).send(newProduct);
        } catch (error) {
            console.log('Error adding a new Product', error);
            res.status(500).send({ error: 'Internal server error' });
        }
    },
    myProduct: async (req, res) => {
        const id = req._id
        if (!ObjectId.isValid(id)) {
            return res.status(400).json({ error: 'Invalid Admin id' });
        }

        try {
            const Data = await product.findById(id);
            if (!Data) {
                return res.status(404).json({ message: 'No record found' });
            }
            return res.json({ Data });
        } catch (error) {
            console.error('Error:', error.message);
            return res.status(500).json({ message: 'Internal Server Error' });
        }
    },
    getProduct: async (req, res) => {
        try {
            const rows = await product.find({})
            if (rows.length === 0) {
                res.status(500).send({ message: 'no record found' })
                return;
            }
            return res.status(200).json(rows);
        } catch (error) {
            console.log('Error creating order', error)
            res.status(500).json({ error: 'Internal server error' });
        }
    },
    updateProduct: async (req, res) => {
        try {
            const _id = req.params.id;
            if (!ObjectId.isValid(_id)) {
                return res.status(400).json({ error: 'Invalid Product id' });
            }
            // Check if files were uploaded
            if (req.files && req.files.length > 0) {
                // Delete existing images associated with the product
                const productData = await product.findOne({ _id });
                if (!productData) {
                    return res.status(404).send('Unable to update - Product not found');
                }
                const productImgUrls = productData.productImg.map(imgObj => imgObj.img);
                const deletePromises = productImgUrls.map(url => cloudinaryImageDelete(url));
                await Promise.allSettled(deletePromises);
                // Extract new image URLs from uploaded files
                const newProductImgUrls = req.files.map(file => file.path);
                const productImgObjects = newProductImgUrls.map(url => ({ img: url }));
                const updatedProductData = {
                    productImg: productImgObjects,
                    ...req.body
                };
                const updatedProduct = await product.findByIdAndUpdate(_id, updatedProductData, { new: true });
                if (!updatedProduct) {
                    return res.status(404).json({ message: 'Unable to update - Product not found' });
                }
                return res.json(updatedProduct);
            } else {
                const updatedProduct = await product.findByIdAndUpdate(_id, req.body, { new: true });
                if (!updatedProduct) {
                    return res.status(404).json({ message: 'Unable to update - Product not found' });
                }
                return res.json(updatedProduct);
            }
        } catch (error) {
            console.error('Error updating product:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    },
    deleteProduct: async (req, res) => {
        try {
            const _id = req.params.id;
            if (!ObjectId.isValid(_id)) {
                return res.status(400).json({ error: 'Invalid Product id ' });
            }
            const productData = await product.findOne({ _id });
            if (!productData) {
                return res.status(404).send('Unable to delete - Product not found');
            }
            const productImgUrls = productData.productImg.map(imgObj => imgObj.img);
            const deletePromises = productImgUrls.map(url => cloudinaryImageDelete(url));

            await Promise.all(deletePromises);

            const deleteEntry = await product.findByIdAndDelete(_id);
            if (!deleteEntry) {
                return res.status(404).send('Unable to delete - Product Deletion failed');
            }
            res.status(200).send(`Product and associated images deleted successfully`);
        } catch (error) {
            console.error('Error deleting product:', error);
            res.status(500).json({ error: 'Internal server error' });
        }

    },
    searchProduct: async (req, res) => {
        try {
            let result = await product.find({
                "$or": [
                    { productName: { $regex: req.params.name } }
                ]
            });
            if (result.length > 0) { // Check if result has any records
                res.send(result);
            } else {
                res.send({ message: 'no record found!' });
            }
        } catch (error) {
            // Handle errors here
            console.error(error);
            res.status(500).send('Internal Server Error');
        }
    },
}
module.exports = productController;