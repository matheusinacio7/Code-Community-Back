const service = require('../../service/UserService');

module.exports = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).send({ message: 'must inform name and genres' });
    }

    const newUser = { name, email, password };
    await service.create(newUser);

    return res.status(201).send(newUser);
  } catch (err) {
    return res.status(500).send({
      message: 'Sorry, we got a problem. Please try again later.',
      error: err,
    });
  }
};