var express = require('express');
var router = express.Router();
//var models  = require('../models');
const proposalController = require('../controllers/proposal');

router.get('/', proposalController.getProposals);

router.post('/', proposalController.createProposal);

router.delete('/:id', proposalController.deleteProposal);

module.exports = router;
