const service = require('../../services/UserService');

module.exports = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: 'must inform name and genres' });
    }

    const newUser = { name, email, password };
    await service.create(newUser);

    return res.status(201).json(newUser);
  } catch (err) {
    return res.status(500).json({
      message: 'Sorry, we got a problem. Please try again later.',
      error: err,
    });
  }
};