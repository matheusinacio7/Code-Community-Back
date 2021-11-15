const User = require('../../model/mongo/UserModel')('user');

module.exports = async (email) => {
  return User.findByEmail(email);
};