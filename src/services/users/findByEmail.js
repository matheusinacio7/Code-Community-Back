const User = require('../../models/mongo/user')('users');

module.exports = async (email) => User.findByEmail(email);