const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/products_model');
const app = express();
const productRouter = require('./routes/products_route');

app.use(express.json());
app.use('/api/products', productRouter);


app.get('/', (req, res) => {
    res.send('Hello World');
})


mongoose.connect('mongodb+srv://nguyenduyngoccter:dmpassword@cruddb.0j7xivv.mongodb.net/crudFCC?retryWrites=true&w=majority&appName=crudDB')
    .then(() => {
        console.log('Connected to database');
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
    })
    .catch(err => {
        console.log('Error: ', err);
    });