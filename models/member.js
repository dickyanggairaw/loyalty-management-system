'use strict';

const {
  Model
} = require('sequelize');
const { hashPassword, formatStringDate } = require('../helpers');
const { DATE_FULL_YEAR } = require('../utils/date.util');

module.exports = (sequelize, DataTypes) => {
  class Member extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Member.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    birth_date: DataTypes.DATE,
    address: DataTypes.STRING,
    join_date: DataTypes.DATE,
    referral: DataTypes.NUMBER,
    earn_point: DataTypes.NUMBER,
    reedem_point: DataTypes.NUMBER,
    remain_point: DataTypes.NUMBER,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Member',
    hooks:{
      afterFind: (record, options) => {
        if (!Array.isArray(record)) {
          let e = record
          e.dataValues.birth_date = formatStringDate(e.dataValues.birth_date, DATE_FULL_YEAR)
          e.dataValues.join_date = formatStringDate(e.dataValues.join_date, DATE_FULL_YEAR)
        }else {
          record.forEach(e => {
            e.dataValues.birth_date = formatStringDate(e.dataValues.birth_date, DATE_FULL_YEAR)
            e.dataValues.join_date = formatStringDate(e.dataValues.join_date, DATE_FULL_YEAR)
          })
        }
      },
      beforeCreate: async (record, options) => {
        record.dataValues.password = await hashPassword(record.dataValues.password)
      }
    }
  });
  return Member;
};