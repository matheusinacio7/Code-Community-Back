const _list = require('./list');
const _create = require('./create');
const _updatePsw = require('./updatePsw');
const _remove = require('./remove');
const _findById = require('./findById');
const _findByEmail = require('./findByEmail');

module.exports = (collection) => { 
  return {
    list: () => _list(collection),
    remove: (id) => _remove(collection, id),
    create: (doc) => _create(collection, doc),
    updatePsw: (doc) => _updatePsw(collection, doc),
    findById: (id) => _findById(collection, id),
    findByEmail: (id) => _findByEmail(collection, id),
  } 
};