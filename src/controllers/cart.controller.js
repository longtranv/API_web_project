const httpStatus = require('http-status');
const ApiError = require('../utils');
const catchAsync = require('../utils/catchAsync');
const { userService } = require('../services');
const Cart = require('../models/cart');

const createCart = catchAsync(async (req, res)=>{
    const newCart = new Cart(req.body)

    try {
        const savedCart = await newCart.save()
        res.status(200).json(savedCart)
    }
    catch (err) {
        res.status(500).json(err)
    }
});

module.exports = {createCart};