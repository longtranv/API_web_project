const Cloudinary = require('../config/cloudinary');
const Image = require('../models/image.model');
const ApiError = require('../utils/apiError');
const httpStatus = require('http-status');

const upLoad = async (data, userid) =>{
    const result = await Cloudinary.uploader.upload(data);
    if(!result){
        throw new ApiError(httpStatus.SERVICE_UNAVAILABLE, 'cannot upload')
    }
    return Image.create({
        user: userid,
        public_id: result.public_id,
        url: result.secure_url,
    }
    );
};

module.exports = {
    upLoad
};