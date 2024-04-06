'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Communities', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      transaction_date: {
        type: Sequelize.DATE
      },
      name: {
        type: Sequelize.STRING
      },
      community_code: {
        type: Sequelize.STRING
      },
      transaction_code: {
        type: Sequelize.STRING
      },
      id_member: {
        type: Sequelize.INTEGER,
        references:{
          model:{
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
    });
    await queryInterface.addIndex(
      'Communities',
      ['id_member']
    )
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Communities');
  }
};