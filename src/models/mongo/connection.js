const { MongoClient } = require('mongodb');
require('dotenv').config();

const MONGO_DB_URL = `mongodb://${process.env.HOST || 'localhost'}:27017/`;
const DB_NAME = 'CodeCommunity';

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// Singleton
let db = null;

const connection = () => (db
    ? Promise.resolve(db)
    : MongoClient.connect(MONGO_DB_URL, OPTIONS)
    .then((conn) => {
      db = conn.db(DB_NAME);
      return db;
    }));

module.exports = connection;
