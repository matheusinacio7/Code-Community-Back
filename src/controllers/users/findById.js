const { StatusCodes } = require('http-status-codes');
const service = require('../../services/users');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;

    const user = await service.findById(id);

    if (!user) {
      return res.status(StatusCodes.NOT_FOUND).json({
        err: {
          code: 'invalid_data',
          message: 'Wrong id format',
        },
      });;
    }
    return res.status(StatusCodes.OK).send(user);
  } catch (err) {
    return next(err);
  }
};