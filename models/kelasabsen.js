'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class kelasAbsen extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      kelasAbsen.belongsTo(models.kelas, {
        foreignKey: 'kelasId',
        as: 'kelas'
      });
    }
  }
  kelasAbsen.init({
    kelasId: DataTypes.INTEGER,
    absen: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'kelasAbsen',
  });
  return kelasAbsen;
};