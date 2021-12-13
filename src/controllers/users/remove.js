const { StatusCodes } = require('http-status-codes');
const service = require('../../services/users');

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const found = await service.findById(id);
    if (!found) {
      return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
        err: {
          code: 'invalid_data',
          message: 'Wrong id format',
        },
      });
    }

    const remove = await service.remove(id);
        
    return res.status(StatusCodes.OK).send(remove);
  } catch (err) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      message: 'Sorry, we got a problem. Please try again later.',
      error: err,
    });
  }
};