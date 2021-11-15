const service = require('../../services/UserService');

module.exports = async (req, res) => {
  try {
    const users = await service.list();

    return res.status(200).send(users);
  } catch (err) {
    return res.status(500).send({
      message: 'Sorry, we got a problem. Please try again later.',
      error: err,
    });
  }
};