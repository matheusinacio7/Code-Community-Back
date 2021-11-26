const express = require('express');
const cors = require('cors');

const router = express.Router({ mergeParams: true });

router.post('/', cors(), require('./create'));

module.exports = router;
