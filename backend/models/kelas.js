'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class kelas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      kelas.belongsToMany(models.Guru, { through: models.guruKelas, foreignKey: 'kelasId', as: 'Gurus' });
      kelas.hasMany(models.Absensi, { foreignKey: 'kelasId', as: 'Absensis' });
     
    }
  }
  kelas.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'kelas',
  });
  return kelas;
};