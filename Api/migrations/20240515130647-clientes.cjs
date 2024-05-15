'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.createTable('clientes', { 
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },      
        nomeCliente:{
          type: Sequelize.STRING,
          allowNull: false,
        },
        usuario_id:{
          type: Sequelize.INTEGER,          
        }       

      });
     
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.dropTable('clientes');
     
  }
};
