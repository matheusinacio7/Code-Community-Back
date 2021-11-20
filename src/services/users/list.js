const User = require('../../models/mongo/user')('users');

module.exports = async () => {
  const list = await User.list({});
  return { list }
};