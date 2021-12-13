const { StatusCodes } = require('http-status-codes');
const users = require('../users');
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

module.exports = async (email, password) => {
  try {
    const user = await users.findByEmail(email);

    if (!user || user.password !== password) {
      return { error: { statusCode: (StatusCodes.UNAUTHORIZED), message: 'Invalid email or password'} };
    }

    const jwtConfig = {
      expiresIn: '7d',
      algorithm: 'HS256',
    };

    const { _id, password: _excluded, ...params } = user;

    const token = jwt.sign({ data: user }, secret, jwtConfig);
    return { statusCode: (StatusCodes.OK), user: params, token };
  } catch (e) {
    return { error: { statusCode: (StatusCodes.INTERNAL_SERVER_ERROR), message: e.message } };
  }
}