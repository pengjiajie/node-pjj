'use strict';

var express = require('express');
var Admin = require('./admin');
var router = express.Router();

router.post('/api/reg', Admin.register)
router.get('/api/user', Admin.getUser)

module.exports = router