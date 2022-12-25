const express = require('express');
const { makePayment } = require('../../controllers/payment.controller');
const auth = require('../../middlewares/auth');

const router = express.Router();

router.post("/", auth(), makePayment);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Payment
 *   description: paying
 */

/**
 * @swagger
 * /payment:
 *   post:
 *     summary: charge user
 *     tags: [Payment]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - tokenId
 *               - amount
 *             properties:
 *               tokenId:
 *                 type: string
 *               amount:
 *                 type: number
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *             properties:
 *               tokenId:
 *                 type: string
 *               amount:
 *                 type: number
 *               
 *       "500":
 *         $ref: '#/components/schemas/Error'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 */

