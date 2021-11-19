const User = require('../../models/mongo/user')('user');

module.exports = async (email) => {
  return User.findByEmail(email);
};