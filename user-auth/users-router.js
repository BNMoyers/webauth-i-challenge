//dependencies and imports
const bcrypt = require('bcryptjs');
const router = require('express').Router();
const Users = require('./users-model');
const requiresAuth = require('../user-auth/requires-auth-middleware');

router.get('/users', requiresAuth, (req, res) =>{
    Users.find()
         .then(users => {
             res.json(users);
         }) 
         .catch(err => res.send(err));
})

module.exports = router;

