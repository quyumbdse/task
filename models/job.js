'use strict';
module.exports = (sequelize, DataTypes) => {
  const Job = sequelize.define('Job', {
    is_emergency: DataTypes.BOOLEAN,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    allow_contact_by_app: DataTypes.BOOLEAN,
    can_user_bring_boat: DataTypes.BOOLEAN,
    allow_picking_from_spot: DataTypes.BOOLEAN,
    allow_repair_on_spot: DataTypes.BOOLEAN,
    allow_contact_by_phone: DataTypes.BOOLEAN,
    allow_contact_by_email: DataTypes.BOOLEAN,
    lat: DataTypes.FLOAT,
    lng: DataTypes.FLOAT,
    price: DataTypes.FLOAT,
    posted: DataTypes.BOOLEAN,
    due_date: DataTypes.DATE,
    due_time: DataTypes.TIME,
    is_done: DataTypes.BOOLEAN,
    user_id: DataTypes.INTEGER,
    boat_id: DataTypes.INTEGER,
    service_id: DataTypes.INTEGER,
    awarded_company_id: DataTypes.INTEGER
  }, {});
  Job.associate = function(models) {
    // associations

    Job.hasMany(models.Proposal, {
      foreignKey: 'job_id'
      //as: 'proposals'
    });

    Job.belongsTo(models.Company, {
      onDelete: 'cascade', hooks: true,
      foreignKey: 'awarded_company_id'
    });

    Job.belongsTo(models.User, {
      foreignKey: 'user_id'
    });
  };
  return Job;
};