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
        nomeCliente:{
          type: Sequelize.STRING,
          allowNull: false,
        },
        equipamentoModelo:{
          type: Sequelize.STRING,
          allowNull: false,
        },
        numeroDeSerie:{
          type: Sequelize.STRING,
          allowNull: false,
        },
        dataDeLiberacao:{
          type: Sequelize.DATE,
          allowNull: false,
        },
        codigo:{
          type: Sequelize.INTEGER,          
        },
        descricao:{
          type: Sequelize.STRING,
        },
        quantidade:{
          type: Sequelize.INTEGER,
        },
        void:{
          type: Sequelize.STRING
        }     

      });
     
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.dropTable('equipamentos');
     
  }
};
