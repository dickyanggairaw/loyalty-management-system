const { sequelize, Redeem, Member } = require("../models")
const { STATUS_CREATE } = require("../utils/status.code.util")

class ReedemController {
  static async createReedem(req, res, next) {
    const transaction = await sequelize.transaction()
    try {
      const {
        id_member,
        name,
        earned_point,
        redeemed_point,
      } = req.body
      const dataMember = await Member.findOne({
        where:{id: id_member},
        attributes: ['remain_point', 'earn_point', 'reedem_point', 'id']
      })

      let remain_point = earned_point + dataMember.remain_point

      if(remain_point < redeemed_point) throw {
        message: 'total point not balance'
      }
      remain_point -= redeemed_point

      dataMember.earn_point += earned_point
      dataMember.reedem_point += redeemed_point
      dataMember.remain_point = remain_point
      console.log(dataMember)
      await dataMember.save({transaction})

      let dataReedem = {
        id_member,
        name,
        earned_point,
        redeemed_point,
        remaining_point: remain_point,
        transaction_date: new Date()
      }
      await Redeem.create(dataReedem, {
        transaction
      })

      await transaction.commit()
      res.status(STATUS_CREATE).json(dataReedem)
    } catch (error) {
      await transaction.rollback()
      next(error)
    }
  }
}

module.exports = ReedemController