const express = require('express');
const router = express.Router();
//const models  = require('../models');
const jobController = require('../controllers/job');


router.get('/', jobController.getJobs);

router.post('/', jobController.createJob );
 
router.get('/:id', jobController.singleJob);

router.delete('/:id', jobController.deleteJob);

module.exports = router;
