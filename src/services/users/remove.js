const User = require('../../models/mongo/user')('users');

module.exports = (id) => User.remove(id);
