const connection = require('../connection');

module.exports = async (collection, email) => {
  const user = await (await connection()).collection(collection).findOne({ email });

  return user;
};