const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const adminSchema = new mongoose.Schema({
    adminName: { type: String, required: true },
    adminPhoto: { type: String },
    password: { type: String, required: true },
    contact: { type: Number, required: true },
    emailAddress: { type: String, required: true },
    tokens: [
        {
            token: {
                type: String,
                require: true
            }
        }

    ]
})
adminSchema.methods.generateAuthToken = async function () {
    try {
        let token = jwt.sign({ _id: this._id }, process.env.JWT_SCERETKEY);
        this.tokens = this.tokens.concat({ token: token })
        await this.save();
        return token;
    } catch (error) {
        console.log(error)
    }
};
const admin = mongoose.model('admin', adminSchema);
module.exports = admin