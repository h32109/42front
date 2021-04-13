const express = require('express');
const User = require('../schemas/user');

const router = express.Router();

router.get('/', async (req, res, next) => {
    /*const users = await User.find({});
    res.render('mongoose', { users });*/
    res.send('Hello World!')
});

module.exports = router;