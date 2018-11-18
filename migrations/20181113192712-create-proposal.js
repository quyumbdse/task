'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Proposals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.DATE
      },
      time: {
        type: Sequelize.TIME
      },
      description: {
        type: Sequelize.TEXT
      },
      negotiable: {
        type: Sequelize.BOOLEAN
      },
      status: {
          type: Sequelize.ENUM('pending','accepted',
          'rejected','canceled')
      },
      company_id: {
        allowNull: false,
          type: Sequelize.INTEGER  
      },
      job_id: {
        allowNull: false,
          type: Sequelize.INTEGER  
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Proposals');
  }
};