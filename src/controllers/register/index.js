const express = require('express');
const cors = require('cors');
const create = require('./create');

const router = express.Router({ mergeParams: true });

router.post('/', cors(), create);

module.exports = router;
