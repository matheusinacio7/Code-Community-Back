const connection = require('../connection');

module.exports = async (collection, document) => {
  const { email } = document;
  const user = await connection(collection).findOne({ email });

  return user;
};