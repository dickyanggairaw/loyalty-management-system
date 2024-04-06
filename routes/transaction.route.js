/**
 * @swagger
 * components:
 *   schemas:
 *     Transaction:
 *       type: object
 *       required:
 *         - id_member
 *         - items
 *       properties:
 *         id_member:
 *           type: string
 *         items:
 *           type: object
 *       example:
 *         id_member: 1
 *         items: [
 *                {
 *                  name: Samsung,
 *                  price: 5000000,
 *                  quantity: 5
 *                }
 *               ]
 * tags:
 *   name: SignIn
 *   description: The sign in managing API
 * /transactions:
 *   post:
 *     summary: Sign In member
 *     tags: [Transactions]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Transaction'
 *     responses:
 *       200:
 *         description: The created Transaction.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Transaction'
 *       500:
 *         description: Some server error
 */

const TransactionController = require('../controllers/transaction.controller')

const transactionRoute = require('express').Router()

transactionRoute.post('/', TransactionController.createTransaction)

module.exports = transactionRoute