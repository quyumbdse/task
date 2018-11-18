const express = require('express');
const router = express.Router();
const roleController = require('../controllers/userRole');


router.get('/', roleController.allRoles);

router.post('/', roleController.createRole );
  
module.exports = router;
