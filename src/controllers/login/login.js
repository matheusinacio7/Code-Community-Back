const { StatusCodes } = require('http-status-codes');
const users = require('../../services/users');
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const SERVER_FAILURE = 'Sorry, we got a problem. Please try again later.';

module.exports = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        message: 'Email and password are required',
      });
    }

    const user = await users.findByEmail(email);

    if (!user || user.password !== password) {
      return res.status(StatusCodes.UNAUTHORIZED).json({
        message: 'Invalid email or password',
      });
    }

    const jwtConfig = {
      expiresIn: '7d',
      algorithm: 'HS256',
    };

    const { _id, ...params } = user;

    const token = jwt.sign({ data: user }, secret, jwtConfig);
    return res.status(StatusCodes.OK).json({ user: params, token });
  } catch (e) {
    return res.status(500).json({
      error : SERVER_FAILURE,
    });
  }
}
