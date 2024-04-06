const TierManagementController = require('../controllers/tier.management.controller')

/**
 * @swagger
 * components:
 *   schemas:
 *     TierManagement:
 *       type: object
 *       required:
 *         - point_min
 *         - point_max
 *         - name
 *       properties:
 *         point_min:
 *           type: integer
 *         point_max:
 *           type: integer
 *         name:
 *            type: string
 *       example:
 *         point_min: 1
 *         point_max: 10
 *         name: entry
 * tags:
 *   name: TierManagement
 *   description: The Tier Management managing API
 * /tier-management:
 *   get:
 *     summary: Lists all the members
 *     tags: [TierManagements]
 *     responses:
 *       200:
 *         description: The list of the tier management
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/TierManagement'
 *   post:
 *     summary: Sign In member
 *     tags: [TierManagements]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TierManagement'
 *     responses:
 *       200:
 *         description: The created SignIn.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Response'
 *       500:
 *         description: Some server error
 * /tier-management/{id}:
 *   get:
 *     summary: Get the member by id
 *     tags: [TierManagements]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The tier management id
 *     responses:
 *       200:
 *         description: The tier management response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TierManagement'
 *       404:
 *         description: The book was not found
 *   put:
 *    summary: Update the tier management by the id
 *    tags: [TierManagements]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The tier management id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/TierManagement'
 *    responses:
 *      200:
 *        description: The tier management was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/TierManagement'
 *      404:
 *        description: The tier management was not found
 *      500:
 *        description: Some error happened
 *   delete:
 *     summary: Remove the tier management by id
 *     tags: [TierManagements]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The tier management id
 *
 *     responses:
 *       200:
 *         description: The tier management was deleted
 *       404:
 *         description: The tier management was not found
 */
const tierManagementRoute = require('express').Router()

tierManagementRoute.post('/', TierManagementController.create)
tierManagementRoute.get('/', TierManagementController.list)
tierManagementRoute.get('/:id', TierManagementController.view)
tierManagementRoute.put('/:id', TierManagementController.update)
tierManagementRoute.delete('/:id', TierManagementController.delete)

module.exports = tierManagementRoute