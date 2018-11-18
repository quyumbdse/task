
const models  = require('../models');

const allRoles = (req, res) => {
    models.userRole.findAll({
     // include: [models.User]
    include: [{model: models.User, as: 'users'}]
    }).then(function(roles) {
      res.send(roles);
    });
}

const createRole = (req, res) => {
     models.userRole.create({
      role: req.body.role,
    }).then(function(role) {
      res.send(role)  
    });
  }
module.exports = {
                allRoles,
                createRole
}