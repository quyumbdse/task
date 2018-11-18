const models  = require('../models');

const getProposals = (req, res) => {
    models.Proposal.findAll({
    //  include: [ models.Proposal, models.User]
    // include: [{model: models.Proposal, as: 'proposals', model: models.User, as: 'users'}]
    }).then(function(proposals) {
      res.send(proposals);
    });
}

const createProposal = (req, res) => {
      models.Proposal.create({
      description: req.body.description,
      company_id: req.body.company_id,
      job_id: req.body.job_id,
      user_id: req.body.user_id

    }).then(function(proposal) {
      res.send(proposal)  
    });
}

const deleteProposal = (req, res, next) => {
    models.Proposal.destroy({
        where: {
          id: req.params.id
        }
    })
    .then(proposal => {
      res.send(proposal)
  })
}
module.exports = {
               getProposals,
               createProposal,
               deleteProposal 
}