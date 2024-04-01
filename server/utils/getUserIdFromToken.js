const jwt = require('jsonwebtoken');

function getUserIdFromToken(token, secretKey) {
    try {
        const decoded = jwt.verify(token, secretKey);
        if (decoded && decoded._id) {
            return decoded._id;
        } else {
            throw new Error('Invalid token format');
        }
    } catch (error) {
        console.error('Error decoding token:', error.message);
        return null;
    }
}
module.exports = getUserIdFromToken;