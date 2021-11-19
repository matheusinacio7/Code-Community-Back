const { Router } = require('express');

const router = Router({ mergeParams: true });

router.use('/users', require('./controllers/users'));

module.exports = { router };