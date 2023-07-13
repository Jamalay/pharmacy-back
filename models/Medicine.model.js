const mongoose = require('mongoose');

const medicineSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    needsPrescription: {
        type: Boolean,
        required: true,
    },
    category: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Category'
    }
})

const Medicine = mongoose.model('Medicine', medicineSchema);

module.exports = Medicine;