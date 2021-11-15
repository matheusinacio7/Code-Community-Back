const { MongoClient } = require('mongodb');

const MONGO_URL = 'mongodb://localhost:27017';
const MONGO_DB_NAME = 'codecommunity';

// Singleton

let connection = null;

const DBconnection = async () => {
  try {
    return connection ?
      connection :
      connection = (await MongoClient.connect(
        MONGO_URL,
        {
          useNewUrlParser: true,
          useUnifiedTopology: true
        }
      )).db(MONGO_DB_NAME);
  } catch (err) {
    console.log("MONGO DB ERROR:");
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = DBconnection;