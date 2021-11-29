const service = require('../../services/register');

module.exports = async (req, res, next) => {
  try {
    const {
      name,
      role = 'none',
      email,
      password,
      theme = 'light',
      isPremium = false,
      checkedEmail = false,
      checkedRole = false,
    } = req.body;

    const registerUser = await service
      .create({
        name,
        role,
        email,
        password,
        theme,
        isPremium,
        checkedEmail,
        checkedRole,
      });

    if (registerUser.error) {
      return res.status(406).json({ error: registerUser.error.message });
    }

    return res.status(201).json(registerUser);
  } catch (err) {
    return res.status(500).json({
      message: 'Sorry, we got a problem. Please try again later.',
      error: err,
    });
  }
};
