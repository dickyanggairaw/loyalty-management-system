'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction()
    try {
      await queryInterface.createTable('Items', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false
        },
        price: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        quantity: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        id_transaction: {
          type: Sequelize.INTEGER,
          references: {
            model: {
              tableName: 'Transactions'
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
        'Items',
        ['id_transaction'],
        {transaction}
      )
      await transaction.commit()  
    } catch (error) {
      await transaction.rollback()
    }
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Items');
  }
};