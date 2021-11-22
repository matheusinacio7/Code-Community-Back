const service = require('../../services/register');

module.exports = async (req, res, next) => {
  try {
    const {
      firstName,
      lastName,
      role,
      email,
      password,
      middleName,
    } = req.body;

    const registerUser = await service
      .create({
        firstName,
        lastName,
        role,
        email,
        password,
        middleName,
      });

    if (registerUser.err) {
      return next({
        err: { message: registerUser.error.message }
      })
    }

    return res.status(201).json(registerUser);
  } catch (err) {
    return res.status(500).json({
      message: 'Sorry, we got a problem. Please try again later.',
      error: err,
    });
  }
};

