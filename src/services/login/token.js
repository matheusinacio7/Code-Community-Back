const jwt = require('jsonwebtoken');
const { StatusCodes } = require('http-status-codes');
const service = require('../users');

const secret = process.env.JWT_SECRET;

module.exports = async (email, ccToken) => {
  try {
    const decoded = jwt.verify(ccToken, secret);
    const user = await service.findByEmail(decoded.data.email);

    if (!user) {
      return {
        error: { statusCode: (StatusCodes.NOT_FOUND), message: 'User not found' },
      }
    }

    const { _id, password, ...params } = user;

    return { statusCode: StatusCodes.OK, user: params };
  } catch (e) {
    return { error: { statusCode: (StatusCodes.INTERNAL_SERVER_ERROR), message: e.message } };
  }
}