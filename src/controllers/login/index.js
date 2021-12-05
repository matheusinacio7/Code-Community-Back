const express = require('express');
const cors = require('cors');
const login = require('./login')

const router = express.Router({ mergeParams: true });

router.post('/', cors(), login);

module.exports = router;
