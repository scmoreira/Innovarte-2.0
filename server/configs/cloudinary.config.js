const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');

cloudinary.config({
    cloud_name: process.env.CLOUDNAME,
    api_key: process.env.CLOUDKEY,
    api_secret: process.env.CLOUDSECRET
});

const storage = new CloudinaryStorage ({
    cloudinary,
    folder: 'innovarte2.0',
    allowedFormats: ['jpg', 'jpeg', 'png'],
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

const uploader = multer({ storage });
module.exports = uploader