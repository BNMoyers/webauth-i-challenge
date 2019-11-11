//imports and dependencies
const bcrypt = require('bcryptjs');
const router = require('express').Router();

router.get('/', (req, res) => {
    res.json({ api: "It's Working!" })
});

//exports
module.exports = router;