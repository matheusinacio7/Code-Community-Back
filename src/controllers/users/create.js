const service = require('../../services/users');

module.exports = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    const newUser = await service.create({ name, email, password });

    if (newUser.err) {
      return next({
        err: { message: newUser.error.message }
      })
    }

    return res.status(201).json(newUser);
  } catch (err) {
    return res.status(500).json({
      message: 'Sorry, we got a problem. Please try again later.',
      error: err,
    });
  }
};