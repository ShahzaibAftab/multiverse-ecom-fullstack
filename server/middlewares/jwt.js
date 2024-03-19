const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const Cookies = require('js-cookie');
const admin = require('../models/admin');
dotenv.config();

// const verifyToken = (req, res, next) => {
//     // const token = req.cookies.token
//     const token = Cookies.get('token');
//     if (!token) {
//         return res.status(404).json({ tokenError: "Token not found" });
//     } else {
//         jwt.verify(token, process.env.JWT_SCERETKEY, (err, decoded) => {
//             if (err) {
//                 return res.status(401).json({ message: "Token mismatch" });
//             } else {
//                 // Token is valid, proceed to the next middleware
//                 next();
//             }
//         });
//     }
// };
const verifyToken = async (req, res, next) => {
    try {
        const cookie = req.headers.auth;
        console.log('cookie',req.headers.auth)

        
        // Check if cookie header is present
        if (!cookie) {
            throw new Error("No cookie provided");
        }

        const cookieString = cookie;
        const cookies = cookieString.split("; ");
        let myCookieValue;
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i]

            if (cookie.startsWith("auth=")) {
                myCookieValue = cookie.split("=")[1];
                break;
            }
        }
        console.log(myCookieValue)
        const token = myCookieValue;
        const verifyToken = jwt.verify(token, process.env.JWT_SCERETKEY)
        const rootUser = await admin.findOne({
            _id: verifyToken._id,
            "tokens.token": token
        });
        if (!rootUser) {
            throw new Error("User not found");
        }
        req.token = token;
        req.rootUser = rootUser;
        req.userID = rootUser._id;
        console.log(rootUser);
        next()
    } catch (error) {
        res.status(401).json({ error: "Unauthorized no Token Provided" })
        console.log(error)
    }
}


module.exports = verifyToken;
