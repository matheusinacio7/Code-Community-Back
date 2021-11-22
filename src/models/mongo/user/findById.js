const { ObjectId } = require('mongodb');
const connection = require('../connection');

module.exports = async (collection, id) => (ObjectId.isValid(id)
  ? (await connection()).collection(collection).findOne(ObjectId(id))
  : null
);