const express = require('express');
const router = express.Router();
//const models  = require('../models');
const userController = require('../controllers/user');

router.get('/', userController.getAllUser);

router.post('/', userController.createUser);

router.post('/login',userController.loginUser);

router.delete('/:id', userController.deleteUser);

 
module.exports = router;
