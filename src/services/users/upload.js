const { ObjectId } = require('mongodb');
const User = require('../../models/mongo/user')('users');

module.exports = async (id, { image }) => {
  if (!ObjectId.isValid(id)) {
    return { err: { message: 'Wrong id format', code: 'invalid_data' } };
  }

  const userUpdate = await User
    .updatePsw({ image });
  return userUpdate;
};
