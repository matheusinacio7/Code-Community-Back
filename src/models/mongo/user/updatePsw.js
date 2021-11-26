const { ObjectId } = require('mongodb');
const connection = require('../connection');

module.exports = async (collection, entity) => {
  const { id, ...dataToSet } = entity;

  const updated = await (await connection())
    .collection(collection)
    .findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $set: { ...dataToSet } },
      { returnDocument: 'after' },
  );

  return updated;
};
