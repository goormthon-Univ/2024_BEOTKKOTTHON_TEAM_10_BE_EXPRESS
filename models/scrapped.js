'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Scrapped extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Scrapped.init({
    status: DataTypes.STRING,
    userid: DataTypes.INTEGER,
    scholarship_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Scrapped',
    tableName: 'saves',
    timestamps: false
  });
  return Scrapped;
};