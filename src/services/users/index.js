const list = require('./list');
const create = require('./create');
const updatePsw = require('./updatePsw');
const remove = require('./remove');
const findById = require('./findById');
const findByEmail = require('./findByEmail');

module.exports = { 
  list,
  create,
  remove,
  updatePsw,
  findById,
  findByEmail,
};