'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    active: DataTypes.BOOLEAN,
    profile_pic: DataTypes.STRING,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    user_role_id: DataTypes.INTEGER,
    phone_number: DataTypes.STRING,
    address: DataTypes.STRING,
    zip_code: DataTypes.STRING,
    city: DataTypes.STRING,
    
  }, {});
  
  User.associate = function(models) {
    
    User.belongsTo(models.userRole, {
      foreignKey: 'user_role_id'
    });
    
    User.hasMany(models.Company,  {
      foreignKey: 'user_id',
      as: 'companies'
    });

    User.hasMany(models.Job,  {
      onDelete: 'cascade', hooks: true,
      foreignKey: 'user_id'
     // as: 'companies'
    });
  };
  
  return User;
};