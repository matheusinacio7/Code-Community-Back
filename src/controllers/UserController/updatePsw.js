const service = require('../../service/UserService');

module.exports = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!password || !email) {
      return res.status(400).send({ message: 'must inform password and email' });
    }

    const user = await service.findByEmail(email);

    if (!user) {
      return res.status(404).end();
    }

    const newUser = { ...user, password };
    await service.updatePsw(newUser);

    return res.status(201).send(newUser);
  } catch (err) {
    return res.status(500).send({
      message: 'Sorry, we got a problem. Please try again later.',
      error: err,
    });
  }
};