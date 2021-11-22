const express = require('express');

const router = express.Router({ mergeParams: true });

router.get('/', require('./list'));
router.post('/', require('./create'));
router.get('/id/:id', require('./findById'));
router.get('/email/:email', require('./findByEmail'));
router.put('/psw/:id', require('./updatePsw'));
router.delete('/:id', require('./remove'));

module.exports = router;
