const bcrypt = require('bcrypt');

const hashPasswordMiddleware = async (req, res, next) => {
    try {
        if (req.body.password) {
            const hashedPassword = await bcrypt.hash(req.body.password, 10); // 10 is the number of salt rounds
            req.body.password = hashedPassword;
        }
        next();
    } catch (error) {
        console.error('Error hashing password:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = hashPasswordMiddleware;
