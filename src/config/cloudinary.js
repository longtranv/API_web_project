const Cloudinary = require('cloudinary').v2;
const {cloudinary} = require('./config');

Cloudinary.config({
    cloud_name: cloudinary.name,
    api_key: cloudinary.api_key,
    api_secret: cloudinary.api_secret,
});

module.exports = {Cloudinary};