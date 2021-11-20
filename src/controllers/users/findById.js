const { StatusCodes } = require('http-status-codes');
const service = require('../../services/users');

module.exports = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await service.findById(id);

    if (!user) {
      return res.status(StatusCodes.NOT_FOUND).end();
    }

    return res.status(StatusCodes.OK).send(user);
  } catch (err) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      message: 'Sorry, we got a problem. Please try again later.',
      error: err,
    });
  }
};