const express = require('express');
const cors = require('cors');
const jwtAuth = require('./auth/validateJWT');
const firewall = require('./middlewares/firewall');
const users = require('./controllers/users')
const register = require('./controllers/register');
const login = require('./controllers/login');

const router = express.Router({ mergeParams: true });

router.use('/users', firewall, jwtAuth, users);
router.use('/register', firewall, register);
router.use('/login', firewall, login);

module.exports = router;
