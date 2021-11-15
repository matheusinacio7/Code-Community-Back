const User = require('../../models/mongo/UserModel')('user');

module.exports = async () => {
  return User.list();
};