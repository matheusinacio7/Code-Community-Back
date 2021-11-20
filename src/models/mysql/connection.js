// const MySQL = require('mysql2/promise');

// const MYSQL_PORT = process.env.MYSQL_PORT;
// const MYSQL_USER = process.env.MYSQL_USER;
// const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD;
// const MYSQL_DATABASE = process.env.MYSQL_DATABASE;
// const MYSQL_HOST = process.env.MYSQL_HOST;

// // Singleton
// let connection = null;

// const DBConnection = async (DB) => {
//   try {
//     return connection ? connection : connection = MySQL.createPool({
//       host: MYSQL_HOST,
//       port: MYSQL_PORT,
//       user: MYSQL_USER,
//       password: MYSQL_PASSWORD,
//       database: MYSQL_DATABASE
//     });
//   } catch (err) {
//     console.log("MYSQL DB ERROR:");
//     console.error(err.message);
//     process.exit(1);
//   }
// };

// module.exports = DBConnection;