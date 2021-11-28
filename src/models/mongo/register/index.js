const _create = require('../register/create');

module.exports = (collection) => { 
  return {
    create: (doc) => _create(collection, doc),
  } 
};
