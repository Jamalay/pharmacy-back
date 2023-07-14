const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: String,
    wallet: Number,
})

const User = mongoose.model('User', userSchema);

module.exports = User;