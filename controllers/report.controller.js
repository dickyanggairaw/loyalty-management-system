const { printPdf } = require("../helpers/pdf.helper")
const { sequelize } = require("../models")
const { STATUS_CREATE } = require("../utils/status.code.util")
const { QueryTypes } = require('sequelize')
const path = require('path')

class ReportController {
  static async getResult(type, dataQuery) {
    try {
      const {
        member_no,
        start_date,
        end_date,
        operator_name,
        operator_value
      } = dataQuery
      let whereQuery = ''
      let flag = ''
      if(member_no) whereQuery += ` and m.id = ${member_no} `
      if(start_date && end_date) whereQuery += ` and to_char(r.transaction_date, 'YYYY-MM-DD') between '${start_date}' and '${end_date}'`
      if(operator_name && operator_value) whereQuery += ` and r.earned_point ${operator_name} ${operator_value}`
      if(type == 'earned_point') flag = '-'; else {flag = '+'}
      const query = `select 
        m.id "member_no",
        m."name" ,
        r.transaction_date ,
        r."name" "reference_transaction",
        r.remaining_point ${flag} r.${type} as "existing_point",
        r.${type} ,
        remaining_point "balance_point"
      from "Redeems" r 
      join "Members" m on r.id_member = m.id 
      where r.${type} > 0 ${whereQuery}`
      const result = await sequelize.query(query, {
        type: QueryTypes.SELECT
      })
      return result
    } catch (error) {
      throw error
    }
  }
  static async earnList(req, res, next) {
    try {
      const result = await ReportController.getResult('earned_point', req.query)
      res.status(STATUS_CREATE).json(result)
    } catch (error) {
      next(error)
    }
  }
  static async redeemList(req, res, next) {
    try {
      const result = await ReportController.getResult('redeemed_point', req.query)
      res.status(STATUS_CREATE).json(result)
    } catch (error) {
      next(error)
    }
  }
  static async printPdfReporting(req, res, next) {
    try {
      const { type } = req.query
      const result = await ReportController.getResult(type, req.query)
      const reference_file = `${type}.pdf`
      await printPdf(result, reference_file)
      let pathFile = path.join(
        __dirname,
        "/../",
        reference_file
      );
      res.sendFile(pathFile);
    } catch (error) {
      next(error)
    }
  }
}

module.exports = ReportController