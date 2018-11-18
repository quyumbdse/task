
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const models  = require('../models');

const createUser = (req, res, next) => {
    bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) {
            res.json({
                error: err
            })
        }

        models.User.create({
                name: req.body.name,
                email: req.body.email,
                // password: req.body.password,
                password: hash,
                user_role_id: req.body.user_role_id
            }).then(function (user) {
                res.send(user)
            })
            .catch(error => {
                res.json({
                    error
                })
            })
    
        })
}


const loginUser = (req, res, next) => {
    let email = req.body.email
    let password = req.body.password

    models.User.findOne({
        where: {
            email: email
        }
         })
        .then(user => {
            if(user) {
                bcrypt.compare(password, user.password, (err, result) =>{
                    if(err) {
                        res.json({
                            message: 'Error occured'
                        })
                    }
                    if (result) {
                        let token = jwt.sign({email: user.email, id: user.id}, 'fake-jwt-token',
                        {expiresIn: '2h'})
                        res.json({
                            message: 'login successful',
                            token
                        })
                    } else {
                        res.json({
                            message: 'password doesn\'t match'
                        })
                    }
                })
            } else {
                res.json({
                    message: 'Not a  user'
                })
            }
        })
}


const getAllUser = (req, res, next) => {
    models.User.findAll({
            include: [models.userRole]
        }).then(function (users) {
            res.send(users);
        })
        .catch(error => {
            res.json({
                error
            })
        })
}

const deleteUser = (req, res) => {
   
}

module.exports = {
     getAllUser,
     createUser,
     deleteUser,
     loginUser
    }