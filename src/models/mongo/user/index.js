const _list = require('./list');
const _updatePsw = require('./updatePsw');
const _remove = require('./remove');
const _findById = require('./findById');
const _findByEmail = require('./findByEmail');

module.exports = (collection) => { 
  return {
    list: () => _list(collection),
    remove: (id) => _remove(collection, id),
    updatePsw: (doc) => _updatePsw(collection, doc),
    findById: (id) => _findById(collection, id),
    findByEmail: (email) => _findByEmail(collection, email),
  } 
};
