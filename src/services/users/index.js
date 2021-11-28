const list = require('./list');
const updatePsw = require('./updatePsw');
const remove = require('./remove');
const findById = require('./findById');
const findByEmail = require('./findByEmail');

module.exports = { 
  list,
  remove,
  updatePsw,
  findById,
  findByEmail,
};