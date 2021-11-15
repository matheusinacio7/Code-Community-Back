const User = require('../../model/mongo/UserModel')('user');

module.exports = async () => {
  return User.list();
};