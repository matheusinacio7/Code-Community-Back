const User = require('../../models/mongo/user')('user');

module.exports = async (user) => {
  return User.create(user);
};