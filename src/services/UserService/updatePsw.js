const User = require('../../model/mongo/UserModel')('user');

module.exports = async (id) => {
  return User.updatePsw(id);
};