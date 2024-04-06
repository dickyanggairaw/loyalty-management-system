const { sequelize, Transaction, Item } = require("../models")
const { STATUS_CREATE } = require("../utils/status.code.util")

class TransactionController {
  static async createTransaction(req, res, next) {
    const transaction = await sequelize.transaction()
    try {
      let items = req.body.items
      const data = {
        id_member: req.body.id_member,
        transaction_date: new Date(),
        total_amount: items.reduce((n, {price, quantity}) => n + price * quantity, 0),
        transaction_code: ""//TRINV/000001/02022024 dari helper
      }
      const newTransaction = await Transaction.create(data, {
        transaction
      }) 

      items.forEach(item => item.id_tansaction = newTransaction.id)
      await Item.bulkCreate(items, {
        transaction
      })
      await transaction.commit()
      res.status(STATUS_CREATE).json(req.body)
    } catch (error) {
      await transaction.rollback()
      next(error)
    }
  }
}

module.exports = TransactionController