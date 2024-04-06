function GenerateSuccessResponse(message, data, reference) {
  const response = {
      success: true,
      message: message,
      reference,
      data: data || {},
  }
  return response;
}

function GenerateFailedResponse(message, data) {
  const response = {
      success: false,
      message: message,
      data: (data) ? data : null
  }
  return response;
}

module.exports = {
  GenerateSuccessResponse,
  GenerateFailedResponse
}