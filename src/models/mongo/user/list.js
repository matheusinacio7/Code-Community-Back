const connection = require('../connection');

module.exports = async (collection) => (await connection()).collection(collection).find().toArray();