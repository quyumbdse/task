'use strict';
module.exports = (sequelize, DataTypes) => {
  const Company = sequelize.define('Company', {
      name: DataTypes.STRING,
      lat: DataTypes.FLOAT,
      lng: DataTypes.FLOAT,
      user_id: DataTypes.INTEGER,
      logo_image_url: DataTypes.STRING,
      cvr: DataTypes.CHAR,
      is_paid: DataTypes.BOOLEAN,
      is_enable: DataTypes.BOOLEAN,
      is_visible: DataTypes.BOOLEAN

  }, {});
  Company.associate = function(models) {
      // associations 
      Company.hasMany(models.Proposal, {
        foreignKey: 'company_id'
      //  as: 'Proposals'
  });

  Company.hasMany(models.Job, {
        onDelete: 'cascade', hooks: true,
        foreignKey: 'awarded_company_id',
        as: 'Jobs'
  });

  Company.belongsTo(models.User, {
        foreignKey: 'user_id'
      });
  };
    return Company;
};




