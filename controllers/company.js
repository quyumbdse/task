
const models  = require('../models');

const getCompanies =  (req, res) => {
    models.Company.findAll({
      include: [ models.Proposal, models.User]
    // include: [{model: models.Proposal, as: 'proposals', model: models.User, as: 'users'}]
    }).then(function(companies) {
      res.send(companies);
    });
}

const createCompany = (req, res) => {
      models.Company.create({
      name: req.body.name,
      user_id: req.body.user_id

    }).then(company => {
      res.send(company)  
    });
  }
module.exports = {
                 getCompanies,
                 createCompany
}