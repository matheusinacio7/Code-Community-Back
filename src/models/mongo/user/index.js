const _find = require('./find');
const _create = require('./create');
const _updatePsw = require('./updatePsw');
const _remove = require('./remove');
const _findById = require('./findById');
const _findByEmail = require('./findByEmail');

module.exports = (collection) => { 
  return {
    list: async () => _find(collection),
    remove: async (id) => _remove(collection, id),
    create: async (doc) => _create(collection, doc),
    updatePsw: async (doc) => _updatePsw(collection, doc),
    findById: async (id) => _findById(collection, id),
    findByEmail: async (id) => _findByEmail(collection, id),
  } 
};