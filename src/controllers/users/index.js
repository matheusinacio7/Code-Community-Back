const express = require('express');
const { validateUser } = require('../../middlewares/UserMiddleware');

const list = require('./list');
const findById = require('./findById');
const findByEmail = require('./findByEmail');
const create = require('./create');
const updatePsw = require('./updatePsw');
const remove = require('./remove');

const router = express.Router({ mergeParams: true });

router.get('/', list);
router.post('/', validateUser, create);
router.get('/id/:id', findById);
router.get('/email/:email', findByEmail);
router.put('/psw/:psw', updatePsw);
router.delete('/id/:id', remove);

module.exports = router;