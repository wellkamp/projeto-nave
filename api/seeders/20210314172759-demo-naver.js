'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {  
     await queryInterface.bulkInsert('Navers', [
      {
        name: 'Ciclano',
        job_role: "Desenvolvedor",
        birthdate: "1990-09-01",
        admission_date: "1990-09-01",
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: async (queryInterface, Sequelize) => {
  }
};
