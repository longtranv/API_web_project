const Order = require('../models/order')
const catchAsync = require('../utils/catchAsync')



const createOrder = catchAsync(async (req, res)=>{
    const newOrder = new Order(req.body)

    try {
        const savedOrder = await newOrder.save()
        res.status(200).json(savedOrder)
    }
    catch (err) {
        res.status(500).json(err)
    }
});

module.exports = createOrder;

