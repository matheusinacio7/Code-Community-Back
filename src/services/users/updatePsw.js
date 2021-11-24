const { ObjectId } = require('mongodb');
const User = require('../../models/mongo/user')('users');
const { userValidation } = require('../../schemas/users');

module.exports = async (id, {
  email,
  firstName,
  lastName,
  role,
  password,
  theme,
  error,
  isPremium,
  checkedEmail,
  checkedRole,
}) => {
  if (!ObjectId.isValid(id)) {
    return { err: { message: 'Wrong id format', code: 'invalid_data' } };
  }

  const userIsValid = userValidation
    .validate({ firstName, lastName, role, email, password });

  if (userIsValid.error) {
    return { error: { message: userIsValid.error.message } }
  }

  const userUpdate = await User
    .updatePsw({
      id,
      firstName,
      lastName,
      role,
      email,
      password,
      theme,
      error,
      isPremium,
      checkedEmail,
      checkedRole,
    });
  return userUpdate;
};
