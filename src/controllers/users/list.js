const service = require('../../services/users');

module.exports = async (_req, res, next) => {
  try {
    const users = await service.list();

    if (!users) {
      return res.stauts(404).end();
    }

    return res.status(200).send(users);
  } catch (err) {
    next(err);
  }
};