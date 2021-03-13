'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Project_navers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      naver_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Navers', key: 'id'},
        onUpdate: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      project_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Projects', key: 'id'},
        onUpdate: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    },);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Project_navers');
  }
};