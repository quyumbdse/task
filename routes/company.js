const express = require('express');
const router = express.Router();
//const models  = require('../models');
const companyController = require('../controllers/company');


router.get('/', companyController.getCompanies);

router.post('/', companyController.createCompany );
  
module.exports = router;
