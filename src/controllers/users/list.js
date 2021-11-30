const service = require('../../services/users');

module.exports = async (_req, res, next) => {
  try {
    const users = await service.list();

    if (!users) {
      return res.status(404).end();
    }

    return res.status(users).send(users);
  } catch (err) {
    next(err);
  }
};