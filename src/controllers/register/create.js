const service = require('../../services/register');

module.exports = async (req, res, next) => {
  try {
    const {
      name,
      role,
      email,
      password,
    } = req.body;

    const registerUser = await service
      .create({
        name,
        role,
        email,
        password,
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

