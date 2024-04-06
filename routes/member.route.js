/**
 * @swagger
 * components:
 *   schemas:
 *     Member:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - password
 *         - phone_number
 *         - birth_date
 *         - address
 *         - join_date
 *       properties:
 *         name:
 *           type: string
 *         email:
 *           type: string
 *         password:
 *           type: string
 *         phone_number:
 *           type: string
 *         birth_date:
 *           type: Date
 *         address:
 *           type: string
 *         join_date:
 *           type: string
 *         referral:
 *           type: string
 *         earn_point:
 *           type: string
 *         reedem_point:
 *           type: string
 *         remain_point:
 *           type: string
 *         status:
 *           type: boolean
 *       example:
 *         name: rio
 *         email: rio@gmail.com
 *         password: apaantuh123@
 *         phone_number: '081293097737'
 *         birth_date: 1990-05-15
 *         address: jl. Rawa Indah
 *         join_date: 2023-12-01
 *     ResponseCreateMember:
 *        example: 
 *          success: true
 *          message: successfully create a new data
 *          data: successfully create a new data
 * tags:
 *   name: Members
 *   description: The member managing API
 * /members:
 *   get:
 *     summary: Lists all the members
 *     tags: [Members]
 *     responses:
 *       200:
 *         description: The list of the members
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Member'
 *   post:
 *     summary: Create a new member
 *     tags: [Members]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Member'
 *     responses:
 *       201:
 *         description: The created member.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ResponseCreateMember'
 *       500:
 *         description: Some server error
 * /members/{id}:
 *   get:
 *     summary: Get the member by id
 *     tags: [Members]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The member id
 *     responses:
 *       200:
 *         description: The member response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Member'
 *       404:
 *         description: The book was not found
 *   put:
 *    summary: Update the member by the id
 *    tags: [Members]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The member id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Member'
 *    responses:
 *      200:
 *        description: The member was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Member'
 *      404:
 *        description: The member was not found
 *      500:
 *        description: Some error happened
 *   delete:
 *     summary: Remove the member by id
 *     tags: [Members]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The member id
 *
 *     responses:
 *       200:
 *         description: The member was deleted
 *       404:
 *         description: The member was not found
 */
const MemberController = require('../controllers/member.controller')

const memberRoute = require('express').Router()

memberRoute.post('/', MemberController.createMember)
memberRoute.get('/', MemberController.listMember)
memberRoute.get('/:id', MemberController.viewMember)

module.exports = memberRoute