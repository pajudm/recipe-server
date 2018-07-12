const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

var Schema = mongoose.Schema;

const userSchema = Schema({
    email: {
        type: String,
    },
    password: {
        type: String,
        required: true,
        minlength: 1
    },
    name: {
        type: String,
        required: true
    }
});

const User = module.exports = mongoose.model('User', userSchema);