'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.createTable('pecas', { 
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },      
        codigo:{
          type: Sequelize.STRING,
          allowNull: false,
        },
        descricao:{
          type: Sequelize.STRING,
          allowNull: false,
        }       

      });
     
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.dropTable('pecas');
     
  }
};
