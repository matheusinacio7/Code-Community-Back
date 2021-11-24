const { StatusCodes } = require('http-status-codes');
const service = require('../../services/login');
const users = require('../../services/users');
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

module.exports = async (req, res, next) => {
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

    const token = jwt.sign({ data: user }, secret, jwtConfig);
    return res.status(StatusCodes.OK).json({ token });
  } catch (e) {
    next(e);
  }
}
