const Product = require('../models/products_model');


const getProducts = async (req, res) => {
    const products = await Product.find();
    res.json({ products });
}

const getProductById = async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (!product) {
        return res.status(404).send('Product not found');
    }
    else {
        res.json(product);
    }
}

const updateProduct = async (req, res) => {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body)

    if (!product) {
        return res.status(404).send('Product not found');
    }
    else {
        res.json(product);
    }
}

const createProduct = async (req, res) => {
    const newProduct = await Product.create(req.body);
    res.json(newProduct);
}

const deleteProduct = async (req, res) => {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    res.json({ message: 'Product deleted successfully' });
    if (!product) {
        return res.status(404).send('Product not found');
    }
}

module.exports = {
    getProducts,
    getProductById,
    updateProduct,
    createProduct,
    deleteProduct
}