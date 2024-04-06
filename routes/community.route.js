/**
 * @swagger
 * components:
 *   schemas:
 *     GetMember:
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
 *         persons: [
 *                {
 *                  id_member: 2
 *                }
 *               ]
 *     MemberActivity:
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
 *         name: purchasing
 * tags:
 *   name: Add Member get Member
 *   description: The Community managing API
 * /communities/member-get-member:
 *   post:
 *     summary: Sign In member
 *     tags: [Communities]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/GetMember'
 *     responses:
 *       200:
 *         description: The created GetMember.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/GetMember'
 *       500:
 *         description: Some server error
 * /communities/member-activities:
 *   post:
 *     summary: Sign In member
 *     tags: [Communities]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/MemberActivity'
 *     responses:
 *       200:
 *         description: The created Community.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MemberActivity'
 *       500:
 *         description: Some server error
 */

const CommunityController = require('../controllers/community.controller')

const communitiesRoute = require('express').Router()

communitiesRoute.post('/member-get-member', CommunityController.createGetMember)
communitiesRoute.post('/member-activities', CommunityController.createMemberActivities)

module.exports = communitiesRoute