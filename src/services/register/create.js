const User = require('../../models/mongo/user')('users');
const { userValidation } = require('../../schemas/users');

module.exports = async ({
  name,
  email,
  role,
  password,
}) => {
  const userIsValid = userValidation
    .validate({ name, role, email, password });

  if (userIsValid.error) {
    return { error: { message: userIsValid.error.message } }
  }

  const registerCreate = await User
    .create({
      name,
      email,
      role,
      password,
    });
  return registerCreate;
};
