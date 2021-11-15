const service = require('../../services/UserService');

module.exports = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await service.findById(id);

    if (!user) {
      return res.status(404).end();
    }

    return res.status(200).send(user);
  } catch (err) {
    return res.status(500).send({
      message: 'Sorry, we got a problem. Please try again later.',
      error: err,
    });
  }
};