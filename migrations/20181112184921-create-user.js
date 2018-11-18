'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {  
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      active: {
        type: Sequelize.BOOLEAN
      },
      profile_pic: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      user_role_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      phone_number: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      zip_code: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      //1,......1,...
      //2,.......1,....
      
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};