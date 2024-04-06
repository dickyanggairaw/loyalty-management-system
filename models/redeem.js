'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Redeem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Redeem.init({
    id_member: DataTypes.INTEGER,
    name: DataTypes.STRING,
    earned_point: DataTypes.INTEGER,
    redeemed_point: DataTypes.INTEGER,
    remaining_point: DataTypes.INTEGER,
    transaction_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Redeem',
  });
  return Redeem;
};