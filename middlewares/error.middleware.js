const {
  GenerateFailedResponse
} = require('../helpers')

function errorMiddleware(err, req, res) { 
  console.log(err) 
  let statusCode = err.statusCode || 500;
  res.status(statusCode).send(GenerateFailedResponse(err.message, err.data))
}

module.exports = {errorMiddleware}