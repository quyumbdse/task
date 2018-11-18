'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Jobs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      is_emergency: {
        type: Sequelize.BOOLEAN
      },
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      allow_contact_by_app: {
        type: Sequelize.BOOLEAN
      },
      can_user_bring_boat: {
        type: Sequelize.BOOLEAN
      },
      allow_picking_from_spot: {
        type: Sequelize.BOOLEAN
      },
      allow_repair_on_spot: {
        type: Sequelize.BOOLEAN
      },
      allow_contact_by_phone: {
        type: Sequelize.BOOLEAN
      },
      allow_contact_by_email: {
        type: Sequelize.BOOLEAN
      },
      lat: {
        type: Sequelize.FLOAT
      },
      lng: {
        type: Sequelize.FLOAT
      },
      price: {
        type: Sequelize.FLOAT
      },
      posted: {
        type: Sequelize.BOOLEAN
      },
      due_date: {
        type: Sequelize.DATE
      },
      due_time: {
        type: Sequelize.TIME
      },
      is_done: {
        type: Sequelize.BOOLEAN
      },
      user_id: {
        type: Sequelize.INTEGER
      },
      boat_id: {
        type: Sequelize.INTEGER
      },
      service_id: {
        type: Sequelize.INTEGER
      },
      awarded_company_id: {
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
    return queryInterface.dropTable('Jobs');
  }
};