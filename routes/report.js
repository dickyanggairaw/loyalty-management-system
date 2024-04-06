/**
 * @swagger
 * components:
 *   schemas:
 *     ReportEarn:
 *       example:
 *         member_no: 1
 *         name: nambah
 *         transaction_date: 1
 *         reference_transaction: 1
 *         loyalty_name: 1
 *         existing_poin: 1
 *         earn_poin: 1
 *         balance_poin: 1
 * tags:
 *   name: Report
 *   description: The sign in managing API
 * /reports/earn:
 *   get:
 *     summary: Sign In member
 *     tags: [Reports]
 *     parameters:
 *      - in: query
 *        name: member_no
 *        type: integer
 *        default: 1
 *        description: The numbers of items to return.
 *      - in: query
 *        name: start_date
 *        default: 2023-01-01
 *        type: string
 *        description: The numbers of items to return.
 *      - in: query
 *        name: end_date
 *        default: 2024-12-01
 *        type: string
 *        description: The numbers of items to return.
 *      - in: query
 *        name: operator_name
 *        default: <
 *        type: string
 *        description: The numbers of items to return.
 *      - in: query
 *        name: operator_value
 *        default: 0
 *        type: integer
 *        description: The numbers of items to return.
 *     responses:
 *       200:
 *         description: The created ReportEarn.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ReportEarn'
 *       500:
 *         description: Some server error
 * /reports/redeem:
 *   get:
 *     summary: Sign In member
 *     tags: [Reports]
 *     parameters:
 *      - in: query
 *        name: member_no
 *        type: integer
 *        default: 1
 *        description: The numbers of items to return.
 *      - in: query
 *        name: start_date
 *        default: 2023-01-01
 *        type: string
 *        description: The numbers of items to return.
 *      - in: query
 *        name: end_date
 *        default: 2024-12-01
 *        type: string
 *        description: The numbers of items to return.
 *      - in: query
 *        name: operator_name
 *        default: <
 *        type: string
 *        description: The numbers of items to return.
 *      - in: query
 *        name: operator_value
 *        default: 0
 *        type: integer
 *        description: The numbers of items to return.
 *     responses:
 *       200:
 *         description: The created ReportEarn.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ReportEarn'
 *       500:
 *         description: Some server error
* /reports/pdf:
 *   get:
 *     summary: Sign In member
 *     tags: [Reports]
 *     parameters:
 *      - in: query
 *        name: member_no
 *        type: integer
 *        default: 1
 *        description: The numbers of items to return.
 *      - in: query
 *        name: start_date
 *        default: 2023-01-01
 *        type: string
 *        description: The numbers of items to return.
 *      - in: query
 *        name: end_date
 *        default: 2024-12-01
 *        type: string
 *        description: The numbers of items to return.
 *      - in: query
 *        name: operator_name
 *        default: <
 *        type: string
 *        description: The numbers of items to return.
 *      - in: query
 *        name: operator_value
 *        default: 0
 *        type: integer
 *        description: The numbers of items to return.
 *      - in: query
 *        name: type
 *        default: earned_point
 *        type: integer
 *        description: The numbers of items to return.
 *     responses:
 *       200:
 *         description: The created ReportEarn.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ReportEarn'
 *       500:
 *         description: Some server error
 */
const ReportController = require('../controllers/report.controller')

const reportRoute = require('express').Router()

reportRoute.get('/earn', ReportController.earnList)
reportRoute.get('/redeem', ReportController.redeemList)
reportRoute.get('/pdf', ReportController.printPdfReporting)

module.exports = reportRoute