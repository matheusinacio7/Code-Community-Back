const User = require('../../models/mongo/user')('user');

module.exports = async (id) => {
  return User.findById(id);
};