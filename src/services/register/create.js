const User = require('../../models/mongo/user')('users');
const { userValidation } = require('../../schemas/users');

module.exports = async ({
  email,
  firstName,
  lastName,
  role,
  password,
  middleName,
}) => {
  const userIsValid = userValidation
    .validate({ firstName, lastName, role, email, password });

  if (userIsValid.error) {
    return { error: { message: userIsValid.error.message } }
  }

  const registerCreate = await User
    .create({
      firstName,
      lastName,
      role,
      email,
      password,
      middleName,
    });
  return registerCreate;
};
