const catchAsync = require("../utils/catchAsync");
const stripe = require('stripe')(process.env.stripekey);

const makePayment = catchAsync(async(req, res)=>{
    await stripe.charges.create({
        source: req.body.tokenId,
        amount: req.body.amount,
        currency: "aud",
    }, (stripeErr, stripeRes) => {
            if (stripeErr) {
                res.status(500).json(stripeErr)
            } else {
                res.status(200).json(stripeRes)
            }
    })
});

module.exports = {makePayment};
