const mongoose = require('mongoose')

const User = mongoose.model('User', 
{
    first_name: String,
    last_name: String,
    email: String,
    password: String,
    birthdate: Date,
    location: Array,
    phoneNumber: Number
});

module.exports = User