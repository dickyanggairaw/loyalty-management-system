const { sequelize, Community, Member } = require("../models")
const { STATUS_CREATE } = require("../utils/status.code.util")

class CommunityController {
  static async createGetMember(req, res, next) {
    const transaction = await sequelize.transaction()
    try {
      let persons = req.body.persons
      const data = {
        id_member: req.body.id_member,
        transaction_date: new Date(),
        community_code: 'member-get-member',
        transaction_code: ""//TRINV/000001/02022024 dari helper
      }
      await Community.create(data, {
        transaction
      }) 

      let idMembers = persons.map(person => person.id_member)
      await Member.update({referral: data.id_member}, {transaction, where: {id: idMembers}})
      await transaction.commit()
      res.status(STATUS_CREATE).json(data)
    } catch (error) {
      await transaction.rollback()
      next(error)
    }
  }
  static async createMemberActivities(req, res, next) {
    try {
      const {
        name,
        id_member
      } = req.body

      const data = {
        id_member: id_member,
        transaction_date: new Date(),
        community_code: 'member-activities',
        name,
        transaction_code: ""//TRINV/000001/02022024 dari helper
      }
      await Community.create(data)

      res.status(STATUS_CREATE).json(data)

    } catch (error) {
      next(error)
    }
  }
}

module.exports = CommunityController