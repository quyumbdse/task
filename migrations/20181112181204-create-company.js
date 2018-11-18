'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Companies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      lat: {
        type: Sequelize.FLOAT
      },
      lng: {
        type: Sequelize.FLOAT
      },
      user_id: {
        type: Sequelize.INTEGER
      },
      logo_image_url: {
        type: Sequelize.FLOAT
      },
      cvr: {
        type: Sequelize.CHAR
      },
      is_paid: {
        type: Sequelize.BOOLEAN
      },
      is_enable: {
        type: Sequelize.BOOLEAN
      },
      is_visible: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      user_id: {
       // allowNull: false,
        type: Sequelize.INTEGER
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Companies');
  }
};