'use strict';
module.exports = (sequelize, DataTypes) => {
  const Proposal = sequelize.define('Proposal', {
    date: DataTypes.DATE,
    time: DataTypes.TIME,
    description: DataTypes.TEXT,
    negotiable: DataTypes.BOOLEAN,
    status: DataTypes.ENUM('pending','accepted',
    'rejected','canceled'),
    company_id: DataTypes.INTEGER,
    job_id: DataTypes.INTEGER
  }, {});
  Proposal.associate = function(models) {
    // associations
    Proposal.belongsTo(models.Company, {
      foreignKey: 'company_id'
    });

    Proposal.belongsTo(models.Job, {
      foreignKey: 'job_id'
    });
  };
  return Proposal;
};