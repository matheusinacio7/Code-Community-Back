const joi = require('@hapi/joi');

const minChars = 5;

const userValidation = joi.object({
  name: joi.string().min(minChars).required(),
  password: joi.string().min(5).required(),
  email: joi.string().email().required(),
});

module.exports = {
  userValidation,
};
