const UserSchema = require('../schemas/users');
const { StatusCodes } = require('http-status-codes');

module.exports = (err, _req, res, _next) => {
  if (err.isJoi) {
    return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
      err: { code: 'invalid_data', message: err.message },
    });
  }
  const statusByErrorCode = {
    notFound: 404,
    alreadyExists: 409,
  };

  const status = statusByErrorCode[err.code] || 500;

  res.status(status).json({ err: { message: err.message } });
};
