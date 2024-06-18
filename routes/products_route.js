const express = require('express');
const mongoose = require('mongoose');
const Product = require('../models/products_model');
const router = express.Router();
const { getProducts, getProductById, updateProduct, createProduct, deleteProduct } = require('../controllers/products_controller');

router.get('/', getProducts);
router.get('/:id', getProductById);
router.post('/', createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router;