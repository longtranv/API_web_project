const express = require('express');
const { makePayment } = require('../../controllers/payment.controller');
const auth = require('../../middlewares/auth');

const router = express.Router();

router.post("/", auth(), makePayment);

module.exports = router;