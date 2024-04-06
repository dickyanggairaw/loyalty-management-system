const moment = require("moment");

function formatStringDate(date, type) {
  return moment(date).format(type)
}

module.exports = {
  formatStringDate
}