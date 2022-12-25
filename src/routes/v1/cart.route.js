const express = require ('express')
const auth = require('../../middlewares/auth');
const cartController = require('../../controllers/cart.controller')

const router = express.Router();

router.post('/', auth(), cartController.createCart);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Cart
 *   description: create cart
 */

/**
 * @swagger
 * /cart:
 *   post:
 *     summary: save user'cart after paying
 *     tags: [Cart]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userId
 *               - products         
 *             properties:
 *               userId:
 *                 type: string
 *               products:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                      productId:
 *                          type: string
 *                      quantity:
 *                           type: number
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 userId:
 *                 type: string
 *               products:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                      productId:
 *                          type: string
 *                      quantity:
 *                           type: number
 *       "500":
 *         $ref: '#/components/schemas/Error'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 */