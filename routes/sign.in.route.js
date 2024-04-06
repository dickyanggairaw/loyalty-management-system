/**
 * @swagger
 * components:
 *   schemas:
 *     SignIn:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *         password:
 *           type: string
 *       example:
 *         email: rio@gmail.com
 *         password: apaan
 *     Response:
 *       type: object
 *       required:
 *         - token
 *       properties:
 *         token:
 *           type: string
 *       example:
 *         token: rio@gmail.com
 * tags:
 *   name: SignIn
 *   description: The sign in managing API
 * /signin:
 *   post:
 *     summary: Sign In member
 *     tags: [SignIn]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SignIn'
 *     responses:
 *       200:
 *         description: The created SignIn.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Response'
 *       500:
 *         description: Some server error
 */

const SignInController = require('../controllers/sign.in.controller')

const signInRoute = require('express').Router()

signInRoute.post('/', SignInController.signIn)

module.exports = signInRoute