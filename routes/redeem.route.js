/**
 * @swagger
 * components:
 *   schemas:
 *     Reedem:
 *       type: object
 *       required:
 *         - id_member
 *         - name
 *         - earned_point
 *         - redeemed_point
 *         - remaining_point
 *       properties:
 *         id_member:
 *           type: string
 *         name:
 *           type: string
 *         earned_point:
 *           type: integer
 *         redeemed_point:
 *           type: integer
 *         remaining_point:
 *           type: integer
 *       example:
 *         id_member: 1
 *         name: nambah
 *         earned_point: 1
 *         redeemed_point: 1
 * tags:
 *   name: SignIn
 *   description: The sign in managing API
 * /reedem:
 *   post:
 *     summary: Sign In member
 *     tags: [Reedems]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Reedem'
 *     responses:
 *       200:
 *         description: The created Reedem.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Reedem'
 *       500:
 *         description: Some server error
 */

const ReedemController = require('../controllers/reedem.controller')

const reedemRoute = require('express').Router()

reedemRoute.post('/', ReedemController.createReedem)

module.exports = reedemRoute