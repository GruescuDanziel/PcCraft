const mongoose = require('mongoose')

const User = mongoose.model('User', 
{
    username: String,
    last_name: String,
    first_name: String,
    email: String,
    password: String,
});

module.exports = User
