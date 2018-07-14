const express = require('express');
const router = express.Router();

const User = require('../models/user');


router.route('/profile')
    .get([passport.authenticate], (req, res, next) => {
        return res.json(req.user);
    });

module.exports = router;