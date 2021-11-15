const express = require('express');
const { validateUser } = require('../../middlewares/user/UserMiddleware');

const list = require('./list');
const get = require('./get');
const create = require('./create');
const update = require('./update');
const remove = require('./remove');

const router = express.Router({ mergeParams: true });

router.get('/', list);
router.post('/', validateUser, create);
router.get('/:id', get);
router.put('/:id', validateUser, update);
router.delete('/:id', remove);


module.exports = router;