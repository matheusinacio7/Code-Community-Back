const joi = require('@hapi/joi');

// const minChars = 5;

const userValidation = joi.object({
  firstName: joi.string().min(2).required(),
  lastName: joi.string().min(1).required(),
  role: joi.string().min(3).required(),
  password: joi.string().min(5).required(),
  email: joi.string().email().required(),
});

module.exports = {
  userValidation,
};
