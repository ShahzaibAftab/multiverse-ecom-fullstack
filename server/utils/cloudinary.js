const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");
const cloudinary = require('./cloudinaryConfig')

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  //   params: {
  //     folder: "DEV",
  //   },
  limits: {
    files: 3 // Limit to 3 files per upload
  }
});

const upload = multer({ storage: storage });
module.exports = upload