'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Guru extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Guru.hasMany(models.guruAbsen)
    }
  }
  Guru.init({
    name: DataTypes.STRING,
    Golongan: DataTypes.STRING,
    umur: DataTypes.INTEGER,
    jenisKelamin: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Guru',
  });
  return Guru;
};