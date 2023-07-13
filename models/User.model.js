const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: String,
    // cart_id: {
    //     type: mongoose.SchemaTypes.ObjectId,
    //     ref: 'Cart'
    // },
    wallet: Number,
})

const User = mongoose.model('User', userSchema);

module.exports = User;