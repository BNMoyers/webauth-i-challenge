//
const bcrypt = require('bcryptjs');
const router = require('express').Router();
const Users = require('./users-model');

router.post('/register', (req, res) => {
    let userInfo = req.body;

    bcrypt.hash(userInfo.password, 14, (err, hashedPassword) => {
        userInfo.password = hashedPassword;

        Users.add(userInfo)
             .then(saved => {
                 res.status(201).json(saved);
             })
             .catch(error => {
                 res.status(500).json(error);
             });
    });
});

router.post('/login', (req, res) => {
    let { username, password } = req.body;

    Users.findBy({ username })
         .first()
         .then(user => {
             user && bcrypt.compareSync(password, user.password)
             ? res.status(200).json({ message: `Welcome, ${user.username}!`})
             : res.status(401).json({ message: 'Invalid Credentials' })
         })
         .catch(err => {
             res.status(500).json(err);
         });
});

module.exports = router;