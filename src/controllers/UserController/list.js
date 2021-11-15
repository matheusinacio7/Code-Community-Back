const service = require('../../service/user');

module.exports = async (req, res, next) => {
  try {
    const users = await service.list();

    return res.status(200).send(users);
  } catch (err) {
    return res.status(500).send({
      message: 'Sorry, we gt a problem. Please try again later.',
      error: err,
    });
  }
};