const cloudinary = require('cloudinary');
const cloudinaryStorage = require('multer-storage-cloudinary');
const multer = require('multer');

cloudinary.config({
    cloud_name: process.env.CLOUDNAME,
    api_key: process.env.CLOUDKEY,
    api_secret: process.env.CLOUDSECRET
});

const storage = cloudinaryStorage({
    cloudinary,
    folder: 'innovarte-2.0',
    allowedFormats: ['jpg', 'jpge', 'png', 'svg'],
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
});

const uploader = multer({ storage });
module.exports = uploader;