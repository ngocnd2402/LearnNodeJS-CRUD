const mongoose = require('mongoose');
const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please enter product name'],
        },
        quantity: {
            type: Number,
            required: [true, 'Please enter product quantity'],
        },
        price: {
            type: Number,
            required: [true, 'Please enter product price'],
        },
        image: {
            type: String,
            required: false,
        }
    }
)


const Product = mongoose.model('Product', productSchema);
module.exports = Product;