const {
  TierManagement
} = require('../models')
const { STATUS_CREATE, STATUS_OK } = require('../utils/status.code.util')
const { SUCCESS_DELETE_DATA } = require('../utils/response.api.util')

class TierManagementController {
  static async create (req, res, next) {
    try {
      await TierManagement.create(req.body)
      res.status(STATUS_CREATE).json(req.body)
    } catch (error) {
      next(error)
    }
  }
  static async list (req, res, next) {
    try {
      const result = await TierManagement.findAll()
      res.status(STATUS_OK).json(result)
    } catch (error) {
      next(error)
    }
  }
  static async view (req, res, next) {
    try {
      const result = await TierManagement.findOne({
        id: req.params.id
      })
      res.status(STATUS_OK).json(result)
    } catch (error) {
      next(error)
    }
  }
  static async update (req, res, next) {
    try {
      const id = req.params.id
      await TierManagement.update(req.body, {
        where: {id}
      })
      res.status(STATUS_OK).json(req.body)
    } catch (error) {
      next(error)
    }
  }
  static async delete (req, res, next) {
    try {
      const id = req.params.id
      await TierManagement.destroy({
        where: {id}
      })
      res.status(STATUS_OK).json({
        message: SUCCESS_DELETE_DATA
      })
    } catch (error) {
      next(error)
    }
  }
}

module.exports = TierManagementController