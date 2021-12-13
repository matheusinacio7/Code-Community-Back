const list = require('./list');
const updatePsw = require('./updatePsw');
const remove = require('./remove');
const findById = require('./findById');
const findByEmail = require('./findByEmail');
const upload = require('./upload');

module.exports = { 
  list,
  remove,
  updatePsw,
  findById,
  findByEmail,
  upload,
};