const express = require ('express')
const auth = require('../../middlewares/auth');
const orderController = require('../../controllers/order.controller')

const router = express.Router();

router.post('/', auth(), orderController);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Order
 *   description: create order
 */

/**
 * @swagger
 * /order:
 *   post:
 *     summary: save order of user
 *     tags: [Order]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userId
 *               - products
 *               - amount
 *               - address         
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
 *               amount:
 *                 type: Number
 *               address:
 *                 type: object
 *               status:
 *                 type: string
 *                  
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
 *               amount:
 *                 type: Number
 *               address:
 *                 type: object
 *               status:
 *                 type: string 
 *       "500":
 *         $ref: '#/components/schemas/Error'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 */