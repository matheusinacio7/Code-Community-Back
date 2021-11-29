const express = require('express');
const cors = require('cors');
const jwtAuth = require('./auth/validateJWT');
const users = require('./controllers/users')
const register = require('./controllers/register');
const login = require('./controllers/login');

const router = express.Router({ mergeParams: true });

router.use('/users', jwtAuth, users);
router.use('/register', register);
router.use('/login', login);

module.exports = router;
