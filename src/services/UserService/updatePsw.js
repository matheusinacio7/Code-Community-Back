const User = require('../../models/mongo/UserModel')('user');

module.exports = async (id) => {
  return User.updatePsw(id);
};