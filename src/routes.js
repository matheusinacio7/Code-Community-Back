const express = require('express');

const router = express.Router({ mergeParams: true });

router.use('/users', require('./controllers/users'));

module.exports = router;
