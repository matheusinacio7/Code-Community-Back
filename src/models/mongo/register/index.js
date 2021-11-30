const _create = require('./create');

module.exports = (collection) => ({
  create: (doc) => _create(collection, doc),
});
