const connection = require("../connection");

module.exports = async (collection, document) => {
  try {
    const inserted = await (await connection()).collection(collection).insertOne(document);
    return inserted;
  } catch (err) {
    console.log(err);
  }
};