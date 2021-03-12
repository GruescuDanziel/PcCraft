const mongoose = require('mongoose')

const User = mongoose.model('User',
{
    first_name:   String,
    last_name:    String,
    username:     String,
    email:        String,
    password:     String,
    birthdate:    String,
    location:     Array,
    phoneNumber:  Number,
    cart : Array
});

module.exports = User
