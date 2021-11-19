const User = require('../../models/mongo/user')('user');

module.exports = async () => {
  return User.list();
};