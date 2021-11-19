const UserSchema = require('../schemas/users');

const validateUser = (req, res, next) => {
  const { name, email, password } = req.body;
  
  const { code, message } = UserSchema.validate({ name, email, password });

  if (message) return res.status(code).json({ message });

  next();
};

module.exports = {
  validateUser,
};