
const models  = require('../models');

const createJob = (req, res) => {
    models.Job.create({
    description: req.body.description,
    title: req.body.title,
    user_id: req.body.user_id,
    "awarded_company_id": req.body.awarded_company_id,

  }).then(job => {
    res.send(job)  
  });
}

const getJobs = (req, res) => {
    models.Job.findAll({
      include: [ models.Proposal, models.User]
    // include: [{model: models.Proposal, as: 'proposals', model: models.User, as: 'users'}]
    }).then(jobs => {
      res.send(jobs);
    });
}

const singleJob = (req, res,next) => {
    models.Job.findById({
        where: {
            id: req.params.id
        }
    }) 
    .then(result => {
        res.send({result})
    })
}

const deleteJob = (req, res, next) => {
    models.Job.destroy({
        where: {
          id: req.params.id
        }
    })
    .then(result => {
      res.status(200).send({
          message: 'deleted',
          result
      })
  })
  
}
module.exports = {
                createJob,
                getJobs,
                singleJob,
                deleteJob
}