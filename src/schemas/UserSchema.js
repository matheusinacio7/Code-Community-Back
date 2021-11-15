const errors = {
  EMPTY_NAME: 'Name is required',
  EMPTY_EMAIL: 'Email is required',
  EMPTY_PASSWORD: 'Password is required',

  TYPEOF_NAME: 'Name must be a string',
  TYPEOF_EMAIL: 'Email must be a string',
  TYPEOF_PASSWORD: 'Password must be a string',

  LENGTH_NAME: 'Name must be at least 3 characters',
  LENGTH_EMAIL: 'Email must be at least 8 characters',
  LENGTH_PASSWORD: 'Password must be at least 8 characters',

  INVALID_EMAIL: 'Email is invalid',
};

const empty = (value) => (!value);
const isNotString = (value) => (typeof value !== 'string');
const isLength = (value, length) => (value.length >= length);
const isEmail = (value) => (value.includes('@'));

const validate = (name, email, password) => {
  const code = 422;

  switch (true) {
    case empty(name): return { code, message: errors.EMPTY_NAME };
    case empty(email): return { code, message: errors.EMPTY_EMAIL };
    case empty(password): return { code, message: errors.EMPTY_PASSWORD };

    case isNotString(name): return { code, message: errors.TYPEOF_NAME };
    case isNotString(email): return { code, message: errors.TYPEOF_EMAIL };
    case isNotString(password): return { code, message: errors.TYPEOF_PASSWORD };
    
    case isLength(name, 3): return { code, message: errors.LENGTH_NAME };
    case isLength(email, 8): return { code, message: errors.LENGTH_EMAIL };
    case isLength(password, 8): return { code, message: errors.LENGTH_PASSWORD };

    case !isEmail(email): return { code, message: errors.INVALID_EMAIL };

    default: return {};
  }
};

module.exports = {
  validate,
};