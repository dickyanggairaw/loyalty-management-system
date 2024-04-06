'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction()
    try {
      await queryInterface.createTable('TierManagements', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        point_max: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        point_min: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
      }, {transaction});
      await transaction.commit()
      console.log("success")
    } catch (error) {
      await transaction.rollback()
      console.log("gagal", error)
    }
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('TierManagements');
  }
};