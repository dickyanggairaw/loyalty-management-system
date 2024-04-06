const { GenerateSuccessResponse } = require("../helpers");
const { SUCCESS_GET_DATA } = require("../utils/response.api.util");
const { STATUS_OK } = require("../utils/status.code.util");

function homeApi (req, res, next) {
  const result = {
    message: 'Welcome to Loyalty Management System'
  }
  res.status(STATUS_OK).json(GenerateSuccessResponse(SUCCESS_GET_DATA, result))
}

module.exports = {
  homeApi
}