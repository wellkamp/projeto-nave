'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {  
     await queryInterface.bulkInsert('Projects', [
      {
        name: 'Projeto muito bom',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: async (queryInterface, Sequelize) => {
  }
};
