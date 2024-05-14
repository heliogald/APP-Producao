'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.createTable('equipametos', { 
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },      
        equipamentoModelo:{
          type: Sequelize.STRING,
          allowNull: false,
        },
        numeroDeSerie:{
          type: Sequelize.STRING,
          allowNull: false,
        }       

      });
     
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.dropTable('equipamentos');
     
  }
};
