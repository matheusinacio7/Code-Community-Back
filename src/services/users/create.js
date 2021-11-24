const User = require('../../models/mongo/user')('users');
const { userValidation } = require('../../schemas/users');

module.exports = async ({
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
  const userIsValid = userValidation
    .validate({ firstName, lastName, role, email, password });

  if (userIsValid.error) {
    return { error: { message: userIsValid.error.message } }
  }

  const userCreate = await User
    .create({
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
  return userCreate;
};
