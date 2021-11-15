const User = require('../../models/mongo/UserModel')('user');

module.exports = async (user) => {
  return Artist.create(user);
};