const User = require('../../models/mongo/user')('users');
const { userValidation } = require('../../schemas/users');

module.exports = async ({ email, name, password }) => {
  const userIsValid = userValidation.validate({ name, email, password });

  if (userIsValid.error) {
    return { error: { message: userIsValid.error.message } }
  }

  const userCreate = await User.create({ name, email, password });
  return userCreate;
};