const cloudinary = require('../utils/cloudinaryConfig')

const cloudinaryImageDelete = async (photoId) => {
    try {
        if (typeof photoId !== 'string' || !photoId.trim()) {
            throw new Error('Invalid photoId provided for image deletion');
        }

        const id = photoId.match(/\/v\d+\/([^\.\/]+)\./);

        if (!id || !id[1]) {
            throw new Error('Unable to extract public ID from photoId');
        }

        const deletionResult = await cloudinary.uploader.destroy(id[1]);
        return deletionResult;
    } catch (error) {
        console.error('Error deleting image:', error.message);
        throw error;
    }
};

module.exports = cloudinaryImageDelete;
