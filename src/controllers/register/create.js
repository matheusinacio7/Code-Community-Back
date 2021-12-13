const service = require('../../services/register');

const SERVER_FAILURE = 'Sorry, we got a problem. Please try again later.';

module.exports = async (req, res) => {
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
      image = '',
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
        image,
      });

    if (registerUser.error) {
      return res.status(403).json({ error: registerUser.error.message });
    }

    return res.status(201).json(registerUser);
  } catch (err) {
    return res.status(500).json({
      error : SERVER_FAILURE,
    });
  }
};
