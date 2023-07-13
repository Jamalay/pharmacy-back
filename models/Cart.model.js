const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
    user_id: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User',
        required: true,
    },
    items: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Medicine',
    }],
    totalPrice: {
        type: Number,
        default: 0,
    },
})

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;