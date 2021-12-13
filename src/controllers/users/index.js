const express = require('express');
const upload = require('../../middlewares/upload');

const router = express.Router({ mergeParams: true });

router.get('/', require('./list'));
router.get('/id/:id', require('./findById'));
router.get('/email/:email', require('./findByEmail'));
router.put('/psw/:id', require('./updatePsw'));
router.delete('/:id', require('./remove'));
router.post('/:id/upload', upload, require('./upload'));

module.exports = router;
