'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Community extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Community.init({
    transaction_date: DataTypes.DATE,
    transaction_code: DataTypes.STRING,
    name: DataTypes.STRING,
    community_code: DataTypes.STRING,
    id_member: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Community',
  });
  return Community;
};