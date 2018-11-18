'use strict';
module.exports = (sequelize, DataTypes) => {
  const userRole = sequelize.define('userRole', {
    role: DataTypes.STRING
  }, {});
  userRole.associate = function(models) {
    // associations 
    userRole.hasMany(models.User,
      {
        foreignKey: 'user_role_id',
        as: 'users'
      });
  };
  return userRole;
};

