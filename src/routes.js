const express = require('express');
const cors = require('cors');

const router = express.Router({ mergeParams: true });

router.get('/posts', require('./auth/validateJWT'), require('./controllers/postsTest'))
router.use('/users', require('./controllers/users'));
router.use('/register', require('./controllers/register'));
router.use('/login', require('./controllers/login'));

module.exports = router;
