const { homeApi } = require('../controllers')
const communitiesRoute = require('./community.route')
const memberRoute = require('./member.route')
const reedemRoute = require('./redeem.route')
const reportRoute = require('./report')
const signInRoute = require('./sign.in.route')
const tierManagementRoute = require('./tier.management.route')
const transactionRoute = require('./transaction.route')

const router = require('express').Router()

router.get('/', homeApi)
router.use('/members', memberRoute)
router.use('/signin', signInRoute)
router.use('/tier-management', tierManagementRoute)
router.use('/transactions', transactionRoute)
router.use('/communities', communitiesRoute)
router.use('/reedem', reedemRoute)
router.use('/reports', reportRoute)

module.exports = router