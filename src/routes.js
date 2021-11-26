const express = require('express');
const cors = require('cors');
const jwtAuth = require('./auth/validateJWT');
const postTest = require('./controllers/postsTest');
const users = require('./controllers/users')
const register = require('./controllers/register');
const login = require('./controllers/login');

const router = express.Router({ mergeParams: true });

// router.use(cors());
router.get('/test', jwtAuth, postTest);
router.use('/users',  users);
router.use('/register', register);
router.use('/login', login);

module.exports = router;
