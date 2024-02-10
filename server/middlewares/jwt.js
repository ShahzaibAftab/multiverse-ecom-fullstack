const jwt = require('jsonwebtoken')
const secretKey = 'abcde'

const verifyToken = (req, res, next) => {
    const token = req.body.token;
    if (!token) {
        return res.status(404).json({ tokenError: "Token not found" })
    }
    else {
        jwt.verify(token, secretKey, (err, decoded) => {
            if (err) {
                res.status(401).json({ message: "Token mismatch" })
                next();
            }
        })
    }
}

module.exports = verifyToken;

