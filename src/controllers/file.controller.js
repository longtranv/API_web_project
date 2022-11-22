const { userService } = require('../services');
const upLoadFile = require('../services/file.service')
const catchAsync = require('../utils/catchAsync');
const ApiError = require('../utils');
const httpStatus = require('http-status');

const uploadImage = catchAsync(async(req, res)=>{
   const user = await userService.getUserById(req.body.userId);
   if(!user){
    throw new ApiError(httpStatus.NOT_FOUND,'user not found');
   }
   const image = await upLoadFile.upLoad(req.body.data, req.body.userId);
   res.send(image);
});

module.exports = {uploadImage};