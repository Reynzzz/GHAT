'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Absensis', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tanggalAbsen: {
        type: Sequelize.DATE
      },
      foto_absen: {
        type: Sequelize.STRING
      },
      
    status: {
        type: Sequelize.STRING
      },
      guruId : {
        type: Sequelize.INTEGER,
        references: {
          model: 'Gurus',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      kelasId : {
        type: Sequelize.INTEGER,
        references: {
          model: 'kelas',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
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
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Absensis');
  }
};