const Joi = require('joi');

const fileUpload = {
    body: Joi.object().keys({
        userId: Joi.string().required(),
        data: Joi.any().required()
    })
}

module.exports ={fileUpload};