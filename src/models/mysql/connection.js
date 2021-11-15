const MySQL = require('mysql2/promise');

const MYSQL_PORT = 3306;
const MYSQL_USER = 'andrejaques';
const MYSQL_PASSWORD = env.local.DATABASE_PASSWORD || 'quaqua123.';
const MYSQL_DATABASE = 'trybecommunity';

// Singleton
let connection = null;

const DBConnection = async (DB) => {
  try {
    return connection ? connection : connection = MySQL.createPool({
      host: '172.17.0.3',
      port: MYSQL_PORT,
      user: MYSQL_USER,
      password: MYSQL_PASSWORD,
      database: MYSQL_DATABASE
    });
  } catch (err) {
    console.log("MYSQL DB ERROR:");
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = DBConnection;