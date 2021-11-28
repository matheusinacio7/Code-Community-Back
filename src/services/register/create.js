const Register = require('../../models/mongo/register')('users');
const User = require('../../models/mongo/user')('users');
const { userValidation } = require('../../schemas/register');

module.exports = async ({
  name,
  role,
  email,
  password,
  theme,
  isPremium,
  checkedEmail,
  checkedRole,
}) => {
  const userIsValid = userValidation
    .validate({ name, role, email, password });

  if (userIsValid.error) {
    return { error: { message: userIsValid.error.message } }
  }

  const userAlreadyExists = await User.findByEmail(email);

  if (userAlreadyExists) {
    return { error: { message: 'Email already exists' } }
  }

  const registerCreate = await Register
    .create({
      name,
      email,
      role,
      password,
      theme,
      isPremium,
      checkedEmail,
      checkedRole,
    });
    
  return registerCreate;
};
