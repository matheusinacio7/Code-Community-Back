const jwt = require('jsonwebtoken');
const { StatusCodes } = require('http-status-codes');
const service = require('../services/users');

const secret = process.env.JWT_SECRET;

const jwtAuth = async (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(StatusCodes.UNAUTHORIZED).json({ error: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, secret);
    const user = await service.findByEmail(decoded.data.email);

    if (!user) {
      return res
        .status(401)
        .json({ message: 'No registered user' });
    }

    req.user = user;

    next();
  } catch (err) {
    return res.status(StatusCodes.UNAUTHORIZED).json({ message: err.message });
  }
};

module.exports = jwtAuth;