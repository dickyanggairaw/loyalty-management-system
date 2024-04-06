const { GenerateSuccessResponse } = require("../helpers")
const {
  Member
} = require('../models')
const { SUCCESS_CREATE_DATA, SUCCESS_GET_DATA } = require("../utils/response.api.util")
const { STATUS_CREATE, STATUS_OK } = require("../utils/status.code.util")

class MemberController {
 static async createMember(req, res, next) {
  try {
    const regularExpression  = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if(!regularExpression.test(req.body.password)) {
      throw { message: "password should contain atleast one number and one special character"};
    }
    await Member.create(req.body)
    res.status(STATUS_CREATE).json(GenerateSuccessResponse(SUCCESS_CREATE_DATA, SUCCESS_CREATE_DATA))
  } catch (error) {
    next(error.message)
  }
 }
 static async listMember(req, res, next) {
  try {
    const result = await Member.findAll({
      attributes: ['id', 'name', 'email', 'phone_number', 'join_date', 'remain_point', 'status']
    })
    res.status(STATUS_OK).json(result)
  } catch (error) {
    next(error)
  }
 }
 static async viewMember(req, res, next) {
  try {
    const id = req.params.id
    const result = await Member.findOne({
      where: {
        id
      }
    })
    if(!result) throw ("member not found")
    res.status(STATUS_OK).json(result)
  } catch (error) {
    next(error)
  }
 }
}

module.exports =  MemberController