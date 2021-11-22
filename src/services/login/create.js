const User = require('../../models/mongo/user')('users');

module.exports = async ({ email, password }) => {
  const registerCreate = await User.create({ email, password });
  return registerCreate;
};
