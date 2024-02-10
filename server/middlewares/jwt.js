const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const verifyToken = (req, res, next) => {
    const token = req.cookies.token
    if (!token) {
        return res.status(404).json({ tokenError: "Token not found" });
    } else {
        jwt.verify(token, process.env.JWT_SCERETKEY, (err, decoded) => {
            if (err) {
                return res.status(401).json({ message: "Token mismatch" });
            } else {
                // Token is valid, proceed to the next middleware
                next();
            }
        });
    }
};

module.exports = verifyToken;
