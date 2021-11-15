const User = require('../../models/mongo/UserModel')('user');

module.exports = async (email) => {
  return User.findByEmail(email);
};