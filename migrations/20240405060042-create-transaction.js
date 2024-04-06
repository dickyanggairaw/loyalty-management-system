'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction()
    try {
      await queryInterface.createTable('Transactions', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        transaction_code: {
          type: Sequelize.STRING
        },
        transaction_date: {
          type: Sequelize.DATE
        },
        total_amount: {
          type: Sequelize.INTEGER
        },
        id_member: {
          type: Sequelize.INTEGER,
          references: {
            model: {
              tableName: 'Members'
            },
            key: 'id'
          },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE'
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
      await queryInterface.addIndex(
        'Transactions',
        ['id_member'],
        {transaction}
      )
      await transaction.commit()
    } catch (error) {
      await transaction.rollback()
    }
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Transactions');
  }
};