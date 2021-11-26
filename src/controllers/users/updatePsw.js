const { StatusCodes } = require('http-status-codes');
const service = require('../../services/users');

module.exports = async (req, res) => {
  try {
    const {
      name,
      role,
      email,
      password,
      theme,
      error,
      isPremium,
      checkedEmail,
      checkedRole,
    } = req.body;
    const { id } = req.params;

    const update = await service
      .updatePsw(id, {
        name,
        role,
        email,
        password,
        theme,
        error,
        isPremium,
        checkedEmail,
        checkedRole,
      });

      if (update.err) {
        return next({
          err: { message: update.error.message }
        })
      }

    return res.status(StatusCodes.OK).send(update);
  } catch (err) {
    return res.status(500).send({
      message: 'Sorry, we got a problem. Please try again later.',
      error: err,
    });
  }
};