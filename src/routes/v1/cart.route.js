const express = require ('express')
const auth = require('../../middlewares/auth');
const cartController = require('../../controllers/cart.controller')

const router = express.Router();

router.post('/', auth(), cartController.createCart);

module.exports = router;