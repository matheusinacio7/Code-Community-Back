const dayjs = require('dayjs');
const { StatusCodes } = require('http-status-codes');
const { loginWithPassword, loginWithToken } =  require('../../services/login');

const INVALID_CREDENTIALS = 'Email and password are required';
const NODE_ENV = process.env.NODE_ENV || 'development';

const SERVER_FAILURE = 'Sorry, we got a problem. Please try again later.';

module.exports = async (req, res) => {
  const { email, password } = req.body;
  const { ccToken } = req.cookies;

  if (email && ccToken) {
    const User = await loginWithToken(email, ccToken);

    if (User.error) {
      return res.status(User.error.statusCode).json({
        message: User.error.message,
      });
    }

    const { statusCode, user } = User;

    return res.status(StatusCodes.OK).json(user);
  }

  if ( email && password ) {
    const User = await loginWithPassword(email, password);

    if ( User.error ) {
      return res.status( User.error.statusCode).json({
        message: User.error.message,
      });
    }

    const { statusCode, user, token } = User;
    
    return res.status(statusCode)
      .cookie('ccToken', token, {
        secure: NODE_ENV !== "development",
        httpOnly: true,
        expires: dayjs().add(7, 'day').toDate(),
      })
      .json(user)
  }
  
  return res.status(StatusCodes.BAD_REQUEST).json({
    message: INVALID_CREDENTIALS,
  })
}